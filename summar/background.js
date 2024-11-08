  chrome.webNavigation.onCompleted.addListener((details) => {
    console.log("Navigation completed:", details.url);
    //testing if URL matches amazon
    if (/amazon\./.test(details.url)){
        chrome.action.setPopup({ tabId: details.tabId, popup: "popup/index.html" });
        chrome.action.openPopup();
    }
  });