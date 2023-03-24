console.log(`hello from service worker.`);

const SECOND = 1000;

// Just a demo async function
export const sleep = async (timeInMs) => {
  return new Promise((resolve) => setTimeout(resolve, timeInMs));
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  (async () => {
    await sleep(1 * SECOND);
    console.log(
      `🍈 Service worker got a message from elsewhere in the extension`
    );
  })();
  return true;
});
