chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript({
    file: 'content.js'
  });
});


console.log("Background script running....")