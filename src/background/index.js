// If your extension doesn't need a background script, just leave this file empty

/*global chrome*/

// Watch for extension icon click
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { command: "toggle" });
    });
});
