const log = console.log;
const stringify = (object) => JSON.stringify(object, null, 2);

log(`hello from service worker.`);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  log(
    `🍈 Service worker got a message from elsewhere in the extension`,
    stringify(request)
  );

  if (request.to === "service-worker") {
    sendResponse({
      to: "popup",
      text: "reply from service worker",
    });
  }
  return true;
});
