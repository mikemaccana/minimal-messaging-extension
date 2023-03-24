const VERSION = 26;
console.log(`hello from service worker ${VERSION}`);
chrome.runtime.onMessage.addListener(async ({ name, options }) => {
  console.log(
    `🍈 Service worker got a message from elsewhere in the extension`
  );
});
