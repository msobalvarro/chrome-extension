// import socketIo from "./socket.io"
import { io } from "socket.io-client"


// const ws = new WebSocket("ws://localhost:8080")
const socket = io("ws://localhost:8080")


function connect() {
  socket.connect()
}

function disconnect() { 
  socket.disconnect()
}

// enviamos un mensaje al backend
chrome.runtime.onMessage.addListener((request, __, response) => {
  // socket.send(request)

  // socket
  console.log(JSON.stringify(request))

  socket.emit("keypress", request)
})