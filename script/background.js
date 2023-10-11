const socketIo = require("./socket.io")

// const ws = new WebSocket("ws://localhost:8080")
const socket = socketIo("ws://localhost:8080")

// enviamos un mensaje al backend
chrome.runtime.onMessage.addListener((request, __, response) => {
  // ws.send(JSON.stringify(request))

  // socket
  console.log(JSON.stringify(request))

  socket.emit("keypress", request)
})