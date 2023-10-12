// import socketIo from "./socket.io"


// const ws = new WebSocket("ws://localhost:8080")
const socket = io("ws://localhost:8080")


function connect() {
  socket.disconnect()
}

// enviamos un mensaje al backend
chrome.runtime.onMessage.addListener((request, __, response) => {
  ws.send(request)

  // socket
  console.log(JSON.stringify(request))

  // socket.emit("keypress", request)
})