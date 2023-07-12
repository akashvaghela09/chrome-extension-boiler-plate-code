// If your extension doesn't need a content script, just leave this file empty
// This is an example of a script that will run on every page. This can alter pages
/*global chrome*/

console.log("Content script running....")

// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender) {
  if (msg.command === "toggle") {
    toggleSidePanel();
  }
});

// Extention UI in an Iframe as side panel
let iframe = document.createElement("iframe");
iframe.style.background = "#fff";
iframe.style.height = "100%";
iframe.style.width = "0px";
iframe.style.position = "fixed";
iframe.style.top = "0px";
iframe.style.right = "0px";
iframe.style.zIndex = "9000000000000000000";
iframe.style.transition = "width 0.2s ease-in-out";
iframe.frameBorder = "none";
iframe.src = chrome.extension.getURL("popup.html");
iframe.allow = "clipboard-write"; // for copy to clipboard
document.body.appendChild(iframe);

// toggle button
let toggleButton = document.createElement("button");
toggleButton.setAttribute("id", "app-toggle-btn");
toggleButton.style.height = "55px";
toggleButton.style.width = "55px";
toggleButton.style.background = "#2f2f2f";
toggleButton.style.fontsize = "20px";
toggleButton.style.border = "none";
toggleButton.style.borderTopLeftRadius = "8px";
toggleButton.style.borderBottomLeftRadius = "8px";
toggleButton.style.position = "fixed";
toggleButton.style.top = "45%";
toggleButton.style.right = "0px";
toggleButton.style.zIndex = "9000000000000000000";
toggleButton.style.cursor = "pointer";
toggleButton.style.transition = "right 0.2s ease-in-out";
document.body.appendChild(toggleButton);

//handle button click
toggleButton.onclick = function () {
  if (iframe.style.width === "0px") {
    iframe.style.width = "320px";
    toggleButton.style.right = "320px";
    iframe.style.borderLeft = "1px solid #dadada";
  } else {
    iframe.style.width = "0px";
    iframe.style.borderLeft = "transparent";
    toggleButton.style.right = "0px";
  }
};

// Adding Leadzilla icon inside Leadzilla toggle button
let toggleButtonIcon = document.createElement("img");
toggleButtonIcon.style.height = "45px";
toggleButtonIcon.style.width = "45px";
toggleButtonIcon.style.marginTop = "3px";
toggleButtonIcon.style.marginLeft = "2px";
toggleButtonIcon.src = chrome.extension.getURL("img/icon-128.png");
let appToggleBtn = document.getElementById("app-toggle-btn");
appToggleBtn.appendChild(toggleButtonIcon);

// Make toggle button draggable:
dragElement(document.getElementById("app-toggle-btn"));

/** Logic for making leadzilla toggle button draggable */
function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos2 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos2 - e.clientY;
    pos2 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Open/Close leadzilla extention UI Iframe
function toggleSidePanel() {
  if (iframe.style.width === "0px") {
    iframe.style.width = "320px";
    toggleButton.style.right = "320px";
  } else {
    iframe.style.width = "0px";
    toggleButton.style.right = "0px";
  }
}