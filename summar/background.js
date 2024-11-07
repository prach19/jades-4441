chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url && /amazon\./.test(tab.url)) {
      chrome.action.openPopup();
    }
  });