const { fetch } = require("./libs/utils");

const requests = {};

browser.browserAction.onClicked.addListener(() => {
  browser.tabs.executeScript({
    file: "browser-polyfill.min.js",
    matchAboutBlank: true
  });
  browser.tabs.insertCSS({ file: "content.css" });
  browser.tabs.executeScript({ file: "content.js" });
});

chrome.runtime.onConnect.addListener((port) => {
  port.onMessage.addListener((event) => {
    if (event.message === "__VANDAL__CLIENT__FETCH") {
      const { uniqueId, meta, ...rest } = event.data;
      requests[uniqueId] = { controller: new AbortController(), meta };
      fetch({
        controller: requests[uniqueId].controller,
        meta,
        ...rest
      }).then((...args) => {
        delete requests[uniqueId];
        port.postMessage({
          message: "__VANDAL__CLIENT__FETCH__RESPONSE",
          payload: args,
          uniqueId
        });
      });
    } else if (event.message === "__VANDAL__CLIENT__FETCH__ABORT") {
      _.forEach(requests, (request, id) => {
        if (
          _.get(event, "data.meta.type") === _.get(request, "meta.type")
          && request.controller
        ) {
          if (request) {
            request.controller.abort();
          }
          delete requests[id];
        }
      });
    }
  });
});

chrome.runtime.onMessage.addListener(async (request) => {
  const { message, data } = request;
  if (message) {
    chrome.tabs.query({ active: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { message, data });
    });
  }
});
