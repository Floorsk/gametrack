const list = document.getElementById("list")
const addButton = document.getElementById("addGame")
const deleteButton = document.getElementById("deleteGame")

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
  data.map((i) => {
    list.innerHTML += `<li>${i.name}</li>`
  })
}

const getGameById = async (id) => {
  let json

  try {
    const promise = await fetch(`${url}/${id}`, { method: "PUT" })
    json = await promise.json()
  } catch (error) {
    console.log(json)
  }

  console.log(json)
}

const add = async () => {
  let json

  try {
    const promise = await fetch(url, { method: "POST", body: JSON.stringify({ name: "Balatro" }), headers: { "Content-type": "application/json" } })
    json = promise.json()
    console.log(json)
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

const deleted = async (id = 5) => {
  let json

  try {
    const promise = await fetch(`${url}?id=${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" }
    })
    json = promise.json()
    console.log(json)
  } catch (error) {
    console.log(error)
  }
}
getGames()

addButton.addEventListener("click", add)
deleteButton.addEventListener("click", deleted)
