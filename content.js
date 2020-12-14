let video = "";
let extent = '';
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    console.log(request)
    if (request === 'image') { extent = '.jpg'; video = document.querySelectorAll(".KL4Bh img").src; }
    else { extent = '.mp4'; video = document.querySelector("video").src; }
    if (!(video.match('blob') || video === "")) {
        const matches = window.location
        chrome.runtime.sendMessage({
            url: video,
            count: matches,
            type: extent
        })
        video = "";
    } else alert('Sorry Video cant be downloaded')
})














// const re = new RegExp('bear', 'gi')
// const matches = document.documentElement.innerHTML.match(re) || []
// chrome.runtime.sendMessage({
//   url: window.location.href,
//   count: matches.length
// })