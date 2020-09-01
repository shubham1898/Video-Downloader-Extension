//alert('Grrr.')
let video="";
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    //alert(request)
//   const re = new RegExp('bear', 'gi')
//   const matches =   window.location 
//   const title=document.querySelector("title") 
    video=document.querySelector("video").src;

    const matches =   window.location 
    

    chrome.runtime.sendMessage({
        url: video,
        count: matches
    })
 // alert(title.innerText)                  //document.documentElement.innerHTML  //.match(re)
 // sendResponse({count:matches,video:video })                             // matches.length
})


// let video=document.querySelector("video").src;
// const matches =   window.location 
// chrome.runtime.sendMessage({
//     url: video,
//     count: matches
// })













// const re = new RegExp('bear', 'gi')
// const matches = document.documentElement.innerHTML.match(re) || []

// chrome.runtime.sendMessage({
//   url: window.location.href,
//   count: matches.length
// })