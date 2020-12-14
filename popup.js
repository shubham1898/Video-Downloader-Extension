// document.querySelector('button').addEventListener('click', onclick, false)
// let bg={};
//const http = require('http');
// const fs = require('fs');
document.addEventListener('DOMContentLoaded', function () {

  const bg = chrome.extension.getBackgroundPage()
  //document.querySelector('.download').addEventListener('click', onclick, false)


})

document.querySelector('.load').addEventListener('click', load, false)
document.querySelector('.loadImg').addEventListener('click', loadImg, false)


function load(type) {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, 'video')
  })
}
function loadImg() {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, 'image')
  })
}

function download(url, fileName) {
  const file = fs.createWriteStream(fileName);
  const request = http.get(url, function (response) {
    response.pipe(file);
  });
}

function forceDownload(url, fileName) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "blob";
  xhr.onload = function () {
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL(this.response);
    var tag = document.createElement('a');
    tag.href = imageUrl;
    tag.download = fileName;
    document.body.appendChild(tag);
    tag.click();
    document.body.removeChild(tag);
  }
  xhr.send();
}


// generate random file name
function randomnumber() {
  var res = Math.floor(Math.random() * 5000);
  return '"' + res + '"';
}









            // Object.keys(bg.bears).forEach(function (url) {
                            //   const div = document.createElement('div')
                            //   div.textContent = `${url}: ${bg.bears[url]}`
                            //   document.body.appendChild(div)