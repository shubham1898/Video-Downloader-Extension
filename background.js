window.video = "";
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  window.video = request.url
  // console.log(window.video);
  download(request)
})
function download(request){
chrome.downloads.download({
  url: request.url,
  filename: `Content${request.type}` // Optional
});
}

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({ url: 'popup.html' })
})

chrome.contextMenus.removeAll();
chrome.contextMenus.create({
      title: "Download",
      contexts: ["all","selection","page","browser_action"],
      onclick: function(info,tab) {
        console.log(info)
        alert(info.srcUrl);
        let request={
          url:info.srcUrl,
          type:'.jpg'
        }
       download(request)
      }
});









//original snippets
// window.bears = {}
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   window.bears[request.url] = request.count
// })