// my content script
const runners_world = "https://www.runnersworld.com"
chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(runners_world)) {
    chrome.scripting.executeScript({
      target : {tabId: tab.id},
      files : ["unblock.js"],
    }).then(() => {
        console.log("injected");
      });
  }
});
