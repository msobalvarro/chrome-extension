const ws = new WebSocket("ws://localhost:8080")


chrome.runtime.onMessage.addListener((request, sender, response) => {
  ws.send(JSON.stringify(request))
  
  
  console.log(request)
})


const color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
})