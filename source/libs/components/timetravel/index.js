import React, {
  useEffect, useState, useCallback, useRef
} from "react";
import PropTypes from "prop-types";
import { scaleLinear } from "d3-scale";
import cx from "classnames";
import ReactTooltip from "react-tooltip";
import {
  Tab, Tabs, TabList, TabPanel
} from "react-tabs";
import tinycolor from "tinycolor2";
import memoizeOne from "memoize-one";

import {
  Card, withDialog, Icon, Spinner
} from "../common";
import {
  getDateTimeFromTS,
  countVersions,
  monthNames,
  useEventCallback
} from "../../utils";
import CalendarFilter from "../filter/calendar";
import GraphFilter from "../filter/graph";

import "./tooltip.css";
import styles from "./timetravel.module.css";
import boxStyle from "../url/box/urlbox.module.css";
import cardStyle from "../common/card/card.module.css";
import calendarStyle from "../filter/calendar/calendar.module.css";
import graphCalendarStyle from "../filter/graph/calendar.module.css";

import { useTimeTravel, useTheme } from "../../hooks";
import { colors } from "../../constants";
import Controller from "./controller";

const memoizedDateTimeFromTS = _.memoize(getDateTimeFromTS);
const memoizedCountVersions = memoizeOne(countVersions);

const colorFromRange = memoizeOne((min, max) => scaleLinear()
  .domain([min, max])
  .range(["#d4f8d0", max <= 5 ? "#a6ef9c" : "#5ee64e"]));

let cardX;
let cardY;
const TimeTravel = (props) => {
  const { state, send } = useTimeTravel();
  const { context: ctx } = state;
  const { theme } = useTheme();

  const capacityRef = useRef(null);

  const memoizedCount = memoizeOne((year, month) => _.map(_.get(ctx.calendar, `${year}.${month}`), "cnt"));

  const getColor = (day) => {
    const {
      calendar,
      selectedTS,
      currentMonth,
      currentYear,
      highlightedDay
    } = ctx;
    const dayCount = _.get(
      calendar,
      `${currentYear}.${currentMonth - 1}.${day - 1}.cnt`
    );

    const cnt = memoizedCount(currentYear, currentMonth - 1);
    const max = _.max(cnt);
    const min = _.min(cnt);

    if (!dayCount) {
      return null;
    }

    let match = false;
    if (selectedTS) {
      const {
        day: selectedDay,
        year: selectedYear,
        month: selectedMonth
      } = memoizedDateTimeFromTS(selectedTS);
      match = selectedDay === day &&
        selectedMonth === currentMonth &&
        selectedYear === currentYear;
    }

    const color = colorFromRange(min, max);
    const bgColor = color(dayCount);

    return {
      backgroundColor: match ? colors.MATCH : bgColor,
      borderColor: !match ?
        tinycolor(bgColor)
          .darken(10)
          .toString() :
        colors.BR_MATCH,
      borderWidth: theme === "light" ? 1 : 0,
      borderStyle: theme === "light" ? "solid" : "none",
      opacity: highlightedDay && highlightedDay !== day ? 0.5 : 1,
      textDecoration:
        (highlightedDay && highlightedDay === day) || match ?
          "underline" :
          "none",
      color: match ? colors.BL_33 : "inherit"
    };
  };

  const onCalendarChange = (date) => {
    const dateArr = _.split(date, "-");
    const year = _.parseInt(_.nth(dateArr, 0));
    const month = _.parseInt(_.nth(dateArr, 1));
    send("GOTO__MONTHYEAR", { payload: { year, month } });
  };

  const onYearChange = (year) => () => send("GOTO__TS_YEAR", {
    payload: {
      month: ctx.currentMonth,
      year
    }
  });

  const onDateMove = useCallback((day) => (e) => {
    if (ctx.highlightedDay) return;
    const date = _.get(
      ctx.calendar,
      `[${ctx.currentYear}][${ctx.currentMonth - 1}][${day - 1}]`
    );
    if (!_.get(date, "cnt")) {
      return;
    }

    const { offsetLeft, offsetTop } = e.target;
    const x = e.nativeEvent.offsetX;
    cardX = x;
    const y = e.nativeEvent.offsetY;
    cardY = y;
    const status = _.get(date, "st", []);

    ctx.cardRef.send({
      type: "SHOW_CARD",
      payload: {
        x: offsetLeft + x,
        y: offsetTop + y + 10,
        ts: _.map(_.get(date, "ts"), (value, i) => ({ value, status: status[i] })),
        tsCount: _.get(date, "cnt"),
        day,
        monthName: monthNames[Math.max(ctx.currentMonth - 1, 0)],
        month: ctx.currentMonth,
        year: ctx.currentYear,
        __CACHED__: _.get(date, "__CACHED__")
      }
    });
  });

  const onMonthChange = (selectedMonth) => () => send("GOTO__MONTHYEAR", {
    payload: { year: ctx.selectedYear, month: selectedMonth }
  });

  const onDateClick = (day) => (e) => {
    const date = _.get(
      ctx.calendar,
      `${ctx.currentYear}.${ctx.currentMonth - 1}.${day - 1}`
    );
    if (!_.get(date, "cnt")) {
      return;
    }

    const { offsetLeft, offsetTop } = e.target;
    const status = _.get(date, "st", []);
    send({ type: "SET_DATE_HIGHLIGHTED", value: day });

    ctx.cardRef.send({
      type: "SHOW_CARD",
      payload: {
        x: offsetLeft + cardX,
        y: offsetTop + cardY + 10,
        ts: _.map(_.get(date, "ts"), (value, i) => ({ value, status: status[i] })),
        day,
        monthName: monthNames[Math.max(ctx.currentMonth - 1, 0)],
        month: ctx.currentMonth,
        year: ctx.currentYear
      }
    });
  };

  const onDateLeave = useCallback(() => {
    if (ctx.highlightedDay) return;
    ctx.cardRef.send("HIDE_CARD");
  });

  const [isManualReload, setManualReload] = useState(false);

  const onReload = () => {
    setManualReload(true);
    if (!ctx.sparkline) {
      send("RELOAD_SPARKLINE");
      return;
    }
    send({ type: "RELOAD_CALENDAR", payload: { force: true } });
  };

  const onRetry = () => {
    if (!ctx.sparkline || state.matches("sparklineError")) {
      send("RELOAD_SPARKLINE_ON_ERROR");
      return;
    }
    send({ type: "RELOAD_CALENDAR_ON_ERROR", payload: { force: true } });
  };

  useEffect(() => {
    if (
      isManualReload &&
      (state.matches("sparklineLoaded.calendarLoaded") ||
        state.matches("sparklineLoaded.noCalendarFound") ||
        state.matches("sparklineLoaded.calendarError"))
    ) {
      setTimeout(() => {
        setManualReload(false);
      }, 100);
    }
  });

  const onCalNext = useEventCallback(
    () => {
      const { currentMonth, currentYear } = ctx;
      if (currentMonth === 12) {
        send("GOTO__MONTHYEAR", {
          payload: {
            year: Math.min(new Date().getFullYear(), currentYear + 1),
            month: 1
          }
        });
      } else {
        send("GOTO__MONTHYEAR", {
          payload: {
            year: currentYear,
            month: currentMonth + 1
          }
        });
      }
    },
    [ctx.currentMonth, ctx.currentYear]
  );

  const onCalPrevious = useEventCallback(
    () => {
      const { currentMonth, currentYear } = ctx;
      if (currentMonth === 1) {
        send("GOTO__MONTHYEAR", {
          payload: {
            year: Math.max(1996, currentYear - 1),
            month: 12
          }
        });
      } else {
        send("GOTO__MONTHYEAR", {
          payload: {
            year: currentYear,
            month: currentMonth - 1
          }
        });
      }
    },
    [ctx.currentMonth, ctx.currentYear]
  );

  const versionCount = memoizedCountVersions(ctx.sparkline);

  const onEscape = useEventCallback((e) => {
    if (e.keyCode === 27 && _.get(ctx, "cardRef.state.context.showCard")) {
      ctx.cardRef.send("HIDE_CARD");
      send({ type: "SET_DATE_HIGHLIGHTED", value: null });
    }
  }, []);

  const onClickOutside = useCallback((e) => {
    if (!_.get(ctx, "cardRef.state.context.showCard")) return;
    const path = _.toArray(e.composedPath());
    if (
      _.some(path, (node) => (
        _.isElement(node) &&
          node.matches &&
          (node.matches(`.${_.get(cardStyle, "card")}`) ||
            node.matches(`.${_.get(calendarStyle, "day")}`) ||
            node.matches(`.${_.get(graphCalendarStyle, "day")}`))
      ))
    ) {
      return;
    }
    ctx.cardRef.send("HIDE_CARD");
    send({ type: "SET_DATE_HIGHLIGHTED", value: null });
  });

  useEffect(() => {
    document.addEventListener("click", onClickOutside, true);
    document.addEventListener("keydown", onEscape);

    return () => {
      document.removeEventListener("click", onClickOutside, true);
      document.removeEventListener("keydown", onEscape);
    };
  }, [onClickOutside, onEscape]);

  useEffect(
    () => {
      if (
        state.matches("sparklineLoaded") &&
        !state.matches("sparklineLoaded.calendarLoaded")
        // TODO remove
        // &&
        // _.get(state, "historyValue.current") === "processingSparkline"
      ) {
        send({
          type: "LOAD_CALENDAR",
          payload: { url: props.url, force: _.get(state, "event.data.force") }
        });
      }
    },
    [props.url, send, state, state.value]
  );

  useEffect(() => () => {
    send("CLEANUP");
  }, [send]);

  useEffect(
    () => {
      if (ctx.isOverCapacity && ctx.showLimitTooltip) {
        if (capacityRef && capacityRef.current) {
          ReactTooltip.show(capacityRef.current);
          setTimeout(() => {
            ReactTooltip.hide(capacityRef.current);
            send("HIDE_LIMIT_TOOLTIP");
          }, 5000);
        }
      }
    },
    [ctx.isOverCapacity, ctx.showLimitTooltip, send]
  );

  const { month: selectedMonth, year: selectedYear } = memoizedDateTimeFromTS(ctx.selectedTS) || {};

  return (
    <div
      className={cx({
        [styles.timetravel]: true,
        [styles.timetravel__graph]: props.selectedTabIndex === 1
      })}
      ref={props.dialogRef}
    >
      {state.matches("loadingSparkline") &&
        _.get(state, "event.type") !== "RELOAD_SPARKLINE_ON_ERROR" && (
          <div className={styles.loader}>
            <Spinner />
            <span className={styles.loader__text}>Bending Time...</span>
          </div>
      )}
      {!state.matches("sparklineLoaded.calendarError") &&
        ctx.sparkline &&
        !state.matches("sparklineError.timeout") && (
        <>
            {ctx.isOverCapacity && (
              <>
                <Icon
                  ref={capacityRef}
                  data-for="vandal-capacity"
                  data-tip="true"
                  name="infoWarn"
                  width={17}
                  className={styles.info_warn__icon}
                />
                <ReactTooltip
                  border
                  className={cx({
                    [styles.tooltip]: true,
                    [styles.capacity_tooltip]: true
                  })}
                  id="vandal-capacity"
                  effect="solid"
                  place="left"
                  type={theme}
                  backgroundColor={
                    theme === "dark" ? colors.GY_6E : colors.WHITE
                  }
                  borderColor={theme === "dark" ? colors.GY_6E : colors.WHITE}
                  arrowColor={theme === "dark" ? colors.GY_6E : colors.GY_CC}
                  delayHide={100}
                  delayShow={100}
                  getContent={() => (
                    <span>
                      The number of captures for this URL has exceeded the
                      maximum limit. Some navigation controls have been
                      disabled.
                    </span>
                  )}
                />
              </>
            )}
          <div
            className={styles.count}
            data-for="vandal-timetravel-count"
            data-tip={versionCount}
          >
            {versionCount}
          </div>
          <ReactTooltip
            border
            className={styles.tooltip}
            id="vandal-timetravel-count"
            effect="solid"
            place="left"
            type={theme}
            backgroundColor={theme === "dark" ? colors.GY_6E : colors.WHITE}
            borderColor={theme === "dark" ? colors.GY_6E : colors.WHITE}
            arrowColor={theme === "dark" ? colors.GY_6E : colors.GY_CC}
            delayHide={100}
            delayShow={100}
            getContent={(count) => (
              <span>
                <span>This URL was saved </span>
                <b>{count}</b>
                <span>
                  {_.parseInt(count) > 1 || _.parseInt(count) === 0 ?
                    " times" :
                    " time on "}
                </span>
                {_.parseInt(count) === 1 && (
                <div>
                  <b>
                    {_.get(
                      memoizedDateTimeFromTS(ctx.lastTS),
                      "humanizedDate"
                    )}
                  </b>
                </div>
                )}
                {_.parseInt(count) > 1 && ctx.firstTS && ctx.lastTS ? (
                  <div>
                    {" "}
                    between
                    {" "}
                    <b>
                      {_.get(
                        memoizedDateTimeFromTS(ctx.firstTS),
                        "humanizedDate"
                      )}
                    </b>
                    {" "}
                    and
                    {" "}
                    <b>
                      {_.get(
                        memoizedDateTimeFromTS(ctx.lastTS),
                        "humanizedDate"
                      )}
                    </b>
                  </div>
                ) : null}
              </span>
            )}
          />
        </>
      )}
      <Tabs
        defaultIndex={props.selectedTabIndex}
        className={styles.tabs}
        selectedTabClassName={styles.tab___active}
        onSelect={props.selectTabIndex}
      >
        <TabList className={styles.tab__list}>
          <Tab className={`${styles.tab} ${styles.tab___calendar}`}>
            Calendar
          </Tab>
          <Tab className={`${styles.tab} ${styles.tab___graph}`}>Graph</Tab>
        </TabList>

        <TabPanel className={styles.tab__panel}>
          <CalendarFilter
            retry={onRetry}
            getColor={getColor}
            goToPrevious={onCalPrevious}
            goToNext={onCalNext}
            onClick={onDateClick}
            onChange={onCalendarChange}
            onMouseMove={onDateMove}
            onMouseLeave={onDateLeave}
          />
        </TabPanel>
        <TabPanel>
          <GraphFilter
            retry={onRetry}
            getColor={getColor}
            onYearChange={onYearChange}
            onMonthChange={onMonthChange}
            onMouseMove={onDateMove}
            onMouseLeave={onDateLeave}
            onClick={onDateClick}
          />
          <div />
        </TabPanel>
      </Tabs>
      <Card
        cardRef={ctx.cardRef}
        url={props.url}
        selectedTS={ctx.selectedTS}
        redirectedTS={ctx.redirectedTS}
        redirectTSCollection={ctx.redirectTSCollection}
        onCardLeave={() => {
          send({ type: "SET_DATE_HIGHLIGHTED", value: null });
        }}
        onTsClick={(ts) => () => {
          send({ type: "NAVIGATETO__TS", value: ts });
        }}
      />
      {((!!(ctx.firstTS || ctx.lastTS || !ctx.sparkline) &&
        !state.matches("sparklineError") &&
        !state.matches("loadingSparkline") &&
        !state.matches("sparklineLoaded.unknown") &&
        !state.matches("sparklineLoaded.calendarError") &&
        !state.matches("sparklineLoaded.loadingCalendar")) ||
        isManualReload) && (
        <div>
          <Icon
            data-for="vandal-reload"
            data-tip="Reload"
            name="reloadCalendar"
            width={15}
            className={cx({
              [styles.reload__icon]: true,
              [styles.reload__icon___loading]: isManualReload
            })}
            onClick={onReload}
          />
          <ReactTooltip
            id="vandal-reload"
            className={styles.reload_tooltip}
            arrowColor={colors.BL}
            textColor={colors.WHITE}
            backgroundColor={colors.BL}
            effect="solid"
            place="bottom"
            type="dark"
            delayShow={1000}
            offset={{ bottom: 10 }}
          />
        </div>
      )}
      {!!ctx.selectedTS &&
        !!versionCount &&
        state.matches("sparklineLoaded.calendarLoaded") &&
        (selectedMonth !== ctx.currentMonth ||
          selectedYear !== ctx.currentYear) && (
          <div>
            <Icon
              data-for="vandal-selection-ts"
              data-tip="Current Selection"
              name="selection"
              className={styles.selection__icon}
              width={27.2}
              onClick={() => {
                send("GOTO__CURRENT_SEL_TS", { value: ctx.selectedTS });
              }}
            />
            <ReactTooltip
              id="vandal-selection-ts"
              className={styles.selection_tooltip}
              arrowColor={colors.BL}
              textColor={colors.WHITE}
              backgroundColor={colors.BL}
              effect="solid"
              place="bottom"
              type="dark"
              delayShow={1000}
            />
          </div>
      )}
      <Controller />
    </div>
  );
};

TimeTravel.propTypes = {
  dialogRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  url: PropTypes.string.isRequired,
  selectedTabIndex: PropTypes.number.isRequired,
  selectTabIndex: PropTypes.func.isRequired
};

export default withDialog(TimeTravel, {
  ignoreClickOnClass: `.${boxStyle.timetravelBtn}`
});
