console.log(`Hello from popup`);
const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log(`In popup, button was clicked, about to run sendmessage`);
  chrome.runtime.sendMessage({
    name: "Steve",
  });
  console.log(`🍉 DO I GET HERE NATIVE ACCOUNTS?`);
});
