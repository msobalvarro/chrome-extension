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
    // verificamos si no esta conectado
    if (!state.connected) {
      const [currentTab] = await chrome.tabs.query({ active: true, currentWindow: true })

      // enviamos un mensaje de estado
      // await chrome.tabs.sendMessage(currentTab.id, JSON.stringify(state))
    }

    // cambiamos de estado
    state.connected = !state.connected

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