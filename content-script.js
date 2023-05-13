const log = console.log;
const stringify = (object) => JSON.stringify(object, null, 2);

log(`Hello from the content script!`);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  log(
    `🎉 Content script got a message from elsewhere in the extension`,
    stringify(request)
  );

  if (request.to === "content-script") {
    sendResponse({
      to: "popup",
      text: "reply from content script",
    });
  }
  return true;
});
