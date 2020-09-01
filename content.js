let video = "";
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    video = document.querySelector("video").src;
    if (!(video.match('blob') || video === "")) {
        const matches = window.location
        chrome.runtime.sendMessage({
            url: video,
            count: matches
        })
        video="";
    } else alert('Sorry Video cant be downloaded')
})














// const re = new RegExp('bear', 'gi')
// const matches = document.documentElement.innerHTML.match(re) || []
// chrome.runtime.sendMessage({
//   url: window.location.href,
//   count: matches.length
// })