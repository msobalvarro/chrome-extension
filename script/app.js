let state = {
  connected: false,
}

const btn = document.getElementById("button")
const connectedTitle = document.getElementById("connected")
const section = document.getElementsByTagName("section")[0]
const title = document.getElementById("title")


function changeAllClass() {
  // removemos/agregamos la clase al boton
  btn.classList.toggle("on")


  title.classList.toggle("hide")
  connectedTitle.classList.toggle("hide")

  section.classList.toggle("on")
}

async function toggleService() {
  try {
    // cambiamos de estado
    state.connected = !state.connected
    // enviamos un mensaje de estado
    await chrome.runtime.sendMessage(state)

    // actualizamos el estado
    await localStorage.setItem("state", JSON.stringify(state))

    // cambiamos las clases a los elementos
    changeAllClass()

  } catch (error) {
    window.alert(error)
  }
}

// agregamos eventos al boton de encendido
btn.addEventListener("click", toggleService)

document.addEventListener("DOMContentLoaded", async function () {
  // obtenemos el estado
  let stateFromStorage = await localStorage.getItem("state")

  // verificamos si existe 
  if (stateFromStorage) {
    stateFromStorage = JSON.parse(stateFromStorage)

    state = { ...stateFromStorage }
  }

  // verificamos si esta conectado
  if (stateFromStorage?.connected) {
    changeAllClass()
  }
})


document.addEventListener("keypress", function (e) {
  if (state.connected) {
    chrome.runtime.sendMessage({ key: e.key, site: null })
  }
})