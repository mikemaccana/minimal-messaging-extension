const log = console.log;

log(`Hello from popup`);

const buttonToServiceWorker = document.querySelector(
  "button.to-service-worker"
);
buttonToServiceWorker.addEventListener("click", async () => {
  log(
    `In popup, button to send message to service worker was clicked, about to run sendMessage`
  );
  const response = chrome.runtime.sendMessage({
    to: "service-worker",
    text: "hello from popup",
  });
  log(`Got response`, response.text);
});

const buttonToContentScript = document.querySelector(
  "button.to-content-script"
);
buttonToContentScript.addEventListener("click", async () => {
  log(
    `In popup, button to send message to content script was clicked, about to run sendMessage`
  );
  const response = await chrome.runtime.sendMessage({
    to: "content-script",
    text: "hello from popup",
  });
  log(`Got response`, response.text);
});
