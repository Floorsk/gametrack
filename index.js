const list = document.getElementById("list")
const search = document.getElementById("search")
const addButton = document.getElementById("addGame")
const deleteButton = document.getElementById("deleteGame")
const searchButton = document.getElementById("searchButton")
const clearButton = document.getElementById("clearButton")
const items = document.getElementsByClassName("item")
const url = `http://localhost:8080/game`

const getGames = async () => {
  let json

  try {
    const promise = await fetch(url)
    json = await promise.json();
  } catch (error) {
    console.log(error)
  }
  lostList(json)
}

const lostList = (data) => {
  list.innerHTML = null
  Array.isArray(data)
    ?
      data.map((i) => {
        list.innerHTML += `<li class="item" id=${i.id}><span>${i.name}</span><button>Edit</button></li>`
      })
    :
      list.innerHTML = `<li class="item" id=${data.id}><span>${data.name}</span><button>Edit</button></li>`
}

const getGameById = async (id) => {
  let json

  try {
    const promise = await fetch(`${url}/gameById?id=${search.value}`)
    json = await promise.json()
  } catch (error) {
    console.log(json)
  }

  lostList(json)
}

const add = async () => {
  let json

  try {
    const promise = await fetch(url, { method: "POST", body: JSON.stringify({ name: "Balatro" }), headers: { "Content-type": "application/json" } })
    json = promise.json()
    getGames()
  } catch (error) {
    console.log(error)
  }
}

const update = async () => {
  let json

  try {
    const promise = await fetch
  } catch (error) {
    console.log(error)
  }
}

const deleted = async (id) => {
  let json
  console.log("test")
  try {
    const promise = await fetch(`${url}?id=${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" }
    })
    json = promise.json()
    getGames()
  } catch (error) {
    console.log(error)
  }
}
getGames()

addButton.addEventListener("click", add)
deleteButton.addEventListener("click", () => {for (const i of items) { i.addEventListener("click", () => {deleted(i.id)}) } })
searchButton.addEventListener("click", getGameById)
clearButton.addEventListener("click", () => {getGames(); search.value = null})