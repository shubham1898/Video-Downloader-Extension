window.video = "";
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  window.video = request.url
  chrome.downloads.download({
    url: request.url,
    filename: "instagram.mp4" // Optional
  });
  // console.log(window.video);
})

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({ url: 'popup.html' })
})









//original snippets
// window.bears = {}
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   window.bears[request.url] = request.count
// })