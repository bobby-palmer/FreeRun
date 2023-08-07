// my content script
const runners_world = "https://www.runnersworld.com"
chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(runners_world)) {
    confirm("testing");
  }
});
