const pokemons = [
  { id: 1, name: 'Charmander', hp: 39, atk: 52, img: './imgs/charmander.png'},
  { id: 2, name: 'Pikachu', hp: 35, atk: 55, img: './imgs/pikachu.png'},
  { id: 3, name: 'Squirtle', hp: 44, atk: 48, img: './imgs/squirtle.png'},
  { id: 4, name: 'Bulbasaur', hp: 45, atk: 49, img: './imgs/bulbasaur.png'},

  { id: 5, name: 'Mew', hp: 100, atk: 100, img: './imgs/mew.png'},
  { id: 6, name: 'Pidgey', hp: 40, atk: 45, img: './imgs/pidgey.png'},
  { id: 7, name: 'Abra', hp: 25, atk: 20, img: './imgs/abra.png'},
  { id: 8, name: 'Snorlax', hp: 160, atk: 110, img: './imgs/snorlax.png'},

  { id: 9, name: 'Caterpie', hp: 45, atk: 30, img: './imgs/caterpie.png'},
  { id: 10, name: 'Dratini', hp: 41, atk: 64, img: './imgs/dratini.png'},
  { id: 11, name: 'Eevee', hp: 55, atk: 55, img: './imgs/eevee.png'},
  { id: 12, name: 'Jigglypuff', hp: 115, atk: 45, img: './imgs/jigglypuff.png'}
]
const pokemonSelect = []
let title = 'Cereal killers'
window.onload = () => {
  const renderPokemon = () => {
    const list_pokemon = document.querySelector('.content .pokemon .list_pokemon')
    let html = `<div class="col-12" id="title"><span>Choose your five:</span></div>`
    pokemons.forEach(item => {
      html += `
      <div class="col-3 item" id="pokemon${item.id}" onclick="showProfile(${item.id})">
        <img src="${item.img}" alt="${item.name}">
      </div>`
    })
    list_pokemon.innerHTML = html
  }
  renderPokemon()
  renderSelect()
}
const renderSelect = () => {
  const selectPokemon = document.querySelector('.content .select_pokemon')
  let html = `
    <div id="title_select"><span>${title}</span><span  ondblclick="editTitle()"> (Double click to edit)</span></div>
    <div class="group_pokemon">`
  for (let i = 0; i < 5; i++) {
    if (pokemonSelect[i]) {
      html += `
        <div class="item">
          <div class="img">
              <button type="button" onclick="deletePokemonSelect(${pokemonSelect[i].id})"><i class="fas fa-times"></i></button>
              <img src="${pokemonSelect[i].img}" alt="${pokemonSelect[i].name}">
          </div>
        </div>`
    } else {
      html += `<div class="item"></div>`
    }
  }
  html += `</div>` 
  selectPokemon.innerHTML = html
}
const showProfile = id => {
  const lisItem = document.querySelectorAll('.pokemon .list_pokemon div')
  lisItem.forEach(item => {
    if (item.classList.contains('selectItem')) {
      item.classList.remove('selectItem')
    }
  })
  const selectItem = document.getElementById('pokemon' + id)
  selectItem.classList.add('selectItem')
  const profile_pokemon = document.querySelector('.content .pokemon .profile_pokemon')
  profile_pokemon.style.display = 'block'
  pokemons.forEach(item => {
    if (item.id === id) {
      profile_pokemon.innerHTML = `
        <div>
            <img id="avatar" src="${item.img}" alt="${item.name}">
        </div>
        <span>${item.name}</span>
        <div class="hp">HP <span>${item.hp}</span> <span></span></div><br>
        <div class="atk">ATK <span>${item.atk}</span> <span></span></div><br>
        <button id="add${item.id}" onclick="addPokemon(${item.id})"> ADD</button>
        <span id="error">You have select 5 pokemons.</span>`
      const hp = document.querySelector('.profile_pokemon .hp span:nth-child(2)')
      hp.style.width = item.hp + 'px'
      const atk = document.querySelector('.profile_pokemon .atk span:nth-child(2)')
      atk.style.width = item.atk + 'px'
    }
  })
  const error = document.getElementById('error')
  if (pokemonSelect.length > 4) {
    error.style.display = 'block'
    const addPokemon = document.getElementById('add' + id)
    addPokemon.setAttribute('disabled', 'disabled')
    addPokemon.style.backgroundColor = '#cccccc'
    addPokemon.style.color = '#888888'
  }
}
const addPokemon = id => {
  const pokemonClick = document.getElementById('pokemon' + id)
  pokemonClick.classList.add('blur')
  pokemonClick.classList.remove('selectItem')
  pokemons.forEach(item => {
    if (item.id === id) {
      pokemonSelect.push(item)
    }
  })
  const addPokemon = document.getElementById('add' + id)
  addPokemon.setAttribute('disabled', 'disabled')
  addPokemon.style.backgroundColor = '#cccccc'
  addPokemon.style.color = '#888888'
  renderSelect()
}
const deletePokemonSelect = id => {
  pokemonSelect.forEach((item, index) => {
    if (item.id === id) {
      pokemonSelect.splice(index, 1)
      const pokemonBlur = document.getElementById('pokemon' + id)
      const addPokemon = document.querySelector('.profile_pokemon button')
      pokemonBlur.classList.remove('blur')
      addPokemon.removeAttribute("disabled")
    }
  })
  const error = document.getElementById('error')
  if (pokemonSelect.length < 5) {
    error.style.display = 'none'
    const addPokemon = document.querySelector('.profile_pokemon button')
    addPokemon.style.backgroundColor = '#1bbc9b'
    addPokemon.style.color = '#fff'
  }
  renderSelect()
}
const editTitle = () => {
  const title_select = document.getElementById('title_select')
  const text = title_select.querySelectorAll('span')
  title_select.innerHTML = `
    <input type="text" id="editTitle" 
      value="${text[0].innerText}"
      onkeypress="return addTitle(event)"
    >`
}
const addTitle = event => {
  if (event.keyCode === 13) {
    const text = document.getElementById('editTitle')
    title =  text.value
    renderSelect()
  }
} 
