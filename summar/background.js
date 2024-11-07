  chrome.webNavigation.onCompleted.addListener((details) => {
    console.log("Navigation completed:", details.url);
    if (/amazon\./.test(details.url)){
        chrome.action.openPopup();
    }
  });