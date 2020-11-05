import { Machine, actions } from 'xstate';
import _ from 'lodash';
import { historyDB } from '../../utils/storage';
import { getCurrentDate } from '../../utils';
const { assign } = actions;
const navigatorMachine = Machine(
  {
    id: 'navigator',
    initial: 'idle',
    context: {
      allRecords: [],
      currentRecords: [],
      currentIndex: 0,
      url: null,
      currentURL: null
    },
    states: {
      idle: {
        invoke: {
          id: 'loadHistory',
          src: 'loadHistory',
          onDone: {
            target: 'historyLoaded',
            actions: assign({
              allRecords: (_ctx, e) => _.get(e, 'data.records', [])
            })
          }
        }
      },
      historyLoaded: {
        initial: 'unknown',
        states: {
          unknown: {
            on: {
              UPDATE_HISTORY_ONCOMMIT: {
                actions: [
                  assign((ctx, e) => {
                    console.log(
                      'UPDATE_HISTORY_ONCOMMIT',
                      _.get(e, 'payload.type'),
                      'currentIndex:',
                      ctx.currentIndex,
                      ctx.previousIndex,
                      'url:',
                      _.get(e, 'payload.url'),
                      'currentRecords:',
                      ctx.currentRecords
                    );

                    const transitionType = _.get(e, 'payload.type');
                    const url = _.get(e, 'payload.url');
                    if (transitionType === 'redirect') {
                      return {
                        currentURL: _.get(e, 'payload.url'),
                        currentRecords: [...ctx.currentRecords, url]
                      };
                    }

                    if (
                      transitionType !== 'auto' ||
                      _.isEmpty(ctx.currentRecords) ||
                      _.size(ctx.currentRecords) === 1
                    ) {
                      return ctx;
                    }

                    let currentIndex;

                    if (
                      _.lastIndexOf(ctx.prevRecords, url) < ctx.previousIndex
                    ) {
                      currentIndex = Math.max(ctx.previousIndex - 1, 0);
                    } else {
                      currentIndex = Math.min(
                        ctx.previousIndex + 1,
                        _.size(ctx.prevRecords) - 1
                      );
                    }

                    console.log(
                      'UPDATE_HISTORY_ONCOMMIT',
                      _.get(e, 'payload.url'),
                      transitionType,
                      'currentIndex:',
                      currentIndex,
                      'prevRecords:',
                      ctx.currentRecords,
                      ctx.prevRecords
                    );

                    return {
                      currentURL: _.get(e, 'payload.url'),
                      currentRecords: ctx.prevRecords,
                      currentIndex
                    };
                  })
                ]
              },
              UPDATE_HISTORY: {
                actions: [
                  assign((ctx, e) => {
                    const { allRecords = [] } = ctx;
                    const url = _.get(e, 'payload.url');
                    const transitionType = _.get(e, 'payload.type');

                    let currentRecords = [];
                    let currentIndex = ctx.currentIndex;

                    if (
                      (transitionType === 'auto' &&
                        !_.isEmpty(ctx.currentRecords)) ||
                      ctx.isBack ||
                      ctx.isForward ||
                      ctx.isReload ||
                      url === _.last(ctx.currentRecords)
                    ) {
                      currentRecords = ctx.currentRecords;
                      if (ctx.isBack) {
                        currentIndex = Math.max(currentIndex - 1, 0);
                      } else if (ctx.isForward) {
                        currentIndex = Math.max(currentIndex + 1, 0);
                      }
                    } else if (
                      _.last(ctx.currentRecords) === url &&
                      currentIndex === _.lastIndexOf(ctx.currentRecords, url)
                    ) {
                      //if reload, do nothing
                    } else {
                      currentRecords = [
                        ..._.slice(
                          ctx.currentRecords,
                          0,
                          Math.max(currentIndex + 1, 0)
                        ),
                        url
                      ];
                      currentIndex = Math.max(_.size(currentRecords) - 1, 0);
                    }

                    console.log(
                      'UPDATE_HISTORY',
                      'currentIndex:',
                      currentIndex,
                      'url:',
                      url,
                      'currentRecords:',
                      currentRecords
                    );

                    return {
                      isBack: false,
                      isForward: false,
                      isReload: false,
                      currentURL: url,
                      prevRecords: ctx.currentRecords,
                      previousIndex: ctx.currentIndex,
                      currentIndex,
                      allRecords:
                        _.get(_.last(allRecords), 'url') !== url
                          ? [
                              ...allRecords,
                              {
                                url,
                                date: getCurrentDate()
                              }
                            ]
                          : allRecords,
                      currentRecords
                    };
                  }),
                  'persistHistory'
                ]
              },
              CLEAR_HISTORY: {
                actions: [
                  assign({
                    allRecords: () => {
                      return [];
                    }
                  }),
                  'clearHistory'
                ]
              },
              GO_BACK: {
                actions: [
                  assign((ctx, e) => {
                    const { currentRecords, currentIndex } = ctx;
                    return {
                      isBack: true,
                      isForward: false,
                      currentURL: _.nth(
                        currentRecords,
                        Math.max(currentIndex - 1, 0)
                      )
                    };
                  }),
                  'updateVandalURL'
                ]
              },
              GO_FORWARD: {
                actions: [
                  assign((ctx, e) => {
                    const { currentRecords, currentIndex } = ctx;
                    return {
                      isForward: true,
                      isBack: false,
                      currentURL: _.nth(
                        currentRecords,
                        Math.min(currentIndex + 1, _.size(currentRecords) - 1)
                      )
                    };
                  }),
                  'updateVandalURL'
                ]
              },
              RELOAD: {
                actions: [
                  assign((ctx, e) => {
                    return {
                      isReload: true
                    };
                  }),
                  'reloadVandalURL'
                ]
              }
            }
          }
        }
      }
    }
  },
  {
    actions: {
      persistHistory: async (ctx) => {
        console.log('persistHistory:', ctx.currentURL);
        try {
          const isEnabled = await historyDB.isEnabled();
          if (!isEnabled) return;
          historyDB.setRecords(ctx.url, ctx.allRecords);
        } catch (e) {}
      },
      clearHistory: async (ctx) => {
        await historyDB.clearRecords(ctx.url);
      }
    },
    services: {
      loadHistory: async (ctx) => {
        console.log('loadHistory----', ctx.url);
        const [records, err] = await historyDB.getRecords(ctx.url);
        console.log('db: ', records);
        return { records: !err ? records : [] };
      }
    }
  }
);

export default navigatorMachine;