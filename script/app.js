const state = {
  connected: false,
}

const btn = document.getElementById("button")
const connectedTitle = document.getElementById("connected")
const section = document.getElementsByTagName("section")[0]
const title = document.getElementById("title")


const changeAllClass = () => {
  title.classList.toggle("hide")
  connectedTitle.classList.toggle("hide")
  section.classList.toggle("on")
}


btn.addEventListener("click", async (event) => {
  try {
    // obtenemos la ventana actual
    const [currentTab] = await chrome.tabs.query({ active: true, currentWindow: true })


    console.log(currentTab)
    // enviamos un mensaje de estado
    // await chrome.tabs.sendMessage(currentTab.id, JSON.stringify(state))

    // cambiamos de estado
    state.connected = !state.connected

    // actualizamos el estado
    await localStorage.setItem("state", JSON.stringify(state))

    // cambiamos las clases a los elementos
    changeAllClass()

    // removemos/agregamos la clase al boton
    btn.classList.toggle("on")
  } catch (error) {
    window.alert(error)
  }
})


document.addEventListener("DOMContentLoaded", async function () {
  // obtenemos el estado
  let stateFromStorage = await localStorage.getItem("state")

  // verificamos si existe 
  if (stateFromStorage) {
    stateFromStorage = JSON.parse(stateFromStorage)
  }

  console.log(stateFromStorage)

  // verificamos si esta conectado
  if (stateFromStorage?.connected) {
    btn.classList.add("on")

    changeAllClass()
  }
})