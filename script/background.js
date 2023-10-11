const ws = new WebSocket("ws://localhost:8080")


chrome.runtime.onMessage.addListener((request, sender, response) => {
  ws.send(JSON.stringify(request))
  
  
  console.log(request)
})