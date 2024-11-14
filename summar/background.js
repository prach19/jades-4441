chrome.webNavigation.onCompleted.addListener((details) => {
  //console.log("Navigation completed:", details.url);
  urlChecker(details.url);
});

function urlChecker(url){
  
  if (/amazon\./.test(url)) {
    chrome.action.openPopup();
  }
  //testing if URL matches temu
  else if (/temu\./.test(url)) {
    chrome.action.openPopup();
  }
  //testing if URL matches shein
  else if (/shein\./.test(url)) {
    chrome.action.openPopup();
  }
}
