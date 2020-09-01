window.video="";
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  window.video = request.url
  chrome.downloads.download({
    url: request.url ,
    filename: "instagram.mp4" // Optional
  });
  console.log(window.video);
})

// const CONTEXT_MENU_ID = "MY_CONTEXT_MENU";
// function getword(info,tab) {
//   if (info.menuItemId !== CONTEXT_MENU_ID) {
//     return;
//   }
//   console.log("Word " + info.selectionText + " was clicked.");
//   chrome.tabs.create({  
//     url: "http://www.google.com/search?q=" + info.selectionText
//   });
// }
// window.onload = () => {
//   chrome.contextMenus.create({
//   title: "something", 
//   contexts:["all", "page", "frame", "selection", "link", "editable", "image", "video", "audio", "launcher", "browser_action", "page_action"], 
//   id: "hghg",
//   onclick : getClickHandler()
// });
// };

//  function getClickHandler(info,tab) {
  
// alert("hi")
    // The srcUrl property is only available for image elements.
   // var url = info.srcUrl;
    //alert(url)
    // chrome.downloads.download({
    //       url: url ,
    //       filename: "instagram.mp4" // Optional
    //     });
    // Create a new window to the info page.
   // chrome.windows.create({ url: url, width: 520, height: 660 });
  // };

// chrome.contextMenus.onClicked.addListener(getword)

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({url: 'popup.html'})
})









//original snippets
// window.bears = {}
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   window.bears[request.url] = request.count
// })