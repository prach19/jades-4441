chrome.webNavigation.onCompleted.addListener(
    async () => {
      await chrome.action.openPopup();
    },
    { url: [
      { urlMatches: 'https://*.amazon.*' },
    ] },
  );