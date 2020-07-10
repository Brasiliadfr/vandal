import React, { useEffect, useState, memo } from 'react';
import { useMachine } from '@xstate/react';

import URLBox from './box';
import URLHistory from './history';
import URLInfo from './info';
import urlMachine from './url.machine';
import { useTimeTravel } from '../../hooks';
import { compareProps, useEventCallback } from '../../utils';
import { Toast, Icon } from '../common';
import styles from './url.module.css';

const URL = memo((props) => {
  const [state, send, service] = useMachine(urlMachine);
  const showURLInfo = state.matches('menus.info.open');
  const showURLHistory = state.matches('menus.history.open');
  const [isNoSnapErorr, setSnapError] = useState(false);

  const onMessage = useEventCallback(
    (request) => {
      if (request.message === '__VANDAL__FRAME__MOUSEDOWN') {
        if (service.state.matches('menus.history.open')) {
          send('TOGGLE_HISTORY');
        } else if (service.state.matches('menus.info.open')) {
          send('TOGGLE_INFO');
        }
      }
    },
    [state.value]
  );

  useEffect(() => {
    chrome.runtime.onMessage.addListener(onMessage);
  }, []);

  useEffect(
    () => {
      if (props.noSparklineFound) {
        setSnapError(true);
      } else if (isNoSnapErorr && !props.noSparklineFound) {
        setSnapError(false);
      }
    },
    [props.noSparklineFound]
  );

  console.log('URL:render');

  return (
    <React.Fragment>
      <URLBox
        url={props.url}
        redirectedTS={props.redirectedTS}
        redirectTSCollection={props.redirectTSCollection}
        sparklineLoaded={props.sparklineLoaded}
        selectedTS={props.selectedTS}
        showURLHistory={showURLHistory}
        showURLInfo={showURLInfo}
        showTimeTravel={props.showTimeTravel}
        toggleURLHistory={() => {
          send('TOGGLE_HISTORY');
          if (props.showTimeTravel) {
            props.toggleTimeTravel();
          }
          if (service.state.matches('menus.info.open')) {
            send('TOGGLE_INFO');
          }
        }}
        toggleURLInfo={() => {
          send('TOGGLE_INFO');
          if (service.state.matches('menus.history.open')) {
            send('TOGGLE_HISTORY');
          }
        }}
        toggleTimeTravel={() => {
          props.toggleTimeTravel();
          if (service.state.matches('menus.history.open')) {
            send('TOGGLE_HISTORY');
          }
        }}
      />
      {showURLInfo && (
        <URLInfo
          url={props.url}
          selectedTS={props.selectedTS}
          redirectedTS={props.redirectedTS}
          redirectTSCollection={props.redirectTSCollection}
          onClose={() => send('TOGGLE_INFO')}
        />
      )}
      {showURLHistory && (
        <URLHistory
          history={props.history}
          clearHistory={props.clearHistory}
          onClick={() => {
            send('TOGGLE_HISTORY');
          }}
        />
      )}
      <Toast className={styles.toast__notfound} show={isNoSnapErorr} exit={0}>
        <div>
          <span>
            No snapshots found for this url. Click on Save to create one.
          </span>
          <Icon
            name="close"
            className={styles.toast__close}
            onClick={() => {
              setSnapError(false);
            }}
          />
        </div>
      </Toast>
      <Toast
        className={styles.toast__redirect}
        closeTimeout={2000}
        show={props.isRedirecting}>
        <div style={{ textAlign: 'center', width: '100%' }}>
          Redirecting to different timestamp ...
        </div>
      </Toast>
    </React.Fragment>
  );
}, compareProps(['isRedirecting', 'noSparklineFound', 'isOverCapacity', 'sparklineLoaded', 'redirectedTS', 'selectedTS', 'redirectTSCollection', 'url', 'showTimeTravel', 'history']));

const URLContainer = memo((props) => {
  const {
    state: ttstate,
    state: { context: ctx }
  } = useTimeTravel();

  console.log(
    'URLContainer:selectedTS:',
    ctx.selectedTS,
    ctx.redirectedTS,
    props
  );

  return (
    <URL
      {...props}
      noSparklineFound={ttstate.matches('noSparklineFound')}
      sparklineLoaded={ttstate.matches('sparklineLoaded')}
      isRedirecting={_.get(ttstate, 'event.type') === 'SET_REDIRECT_INFO'}
      redirectedTS={ctx.redirectedTS}
      isOverCapacity={ctx.isOverCapacity}
      redirectTSCollection={ctx.redirectTSCollection}
      selectedTS={ctx.selectedTS}
    />
  );
}, compareProps(['showTimeTravel', 'url', 'history']));

export default URLContainer;
