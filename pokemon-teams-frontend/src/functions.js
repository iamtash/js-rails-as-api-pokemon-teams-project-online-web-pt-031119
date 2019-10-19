const generateAddPokemonButton = (trainer) => {
    const addPokemonButton = document.createElement('button')
    addPokemonButton.dataset.TrainerId = trainer.id
    addPokemonButton.textContent = 'Add Pokemon'

    addPokemonButton.addEventListener('click', (e) => {
        e.preventDefault()
        const trainer = {trainer_id: e.srcElement.parentElement.dataset.id}
        newPokemonConfigObj.body = JSON.stringify(trainer)
        fetchNewPokemon(POKEMONS_URL, newPokemonConfigObj)
    })

    return addPokemonButton
}

const generatePokemonsUl = (pokemons) => {
    const pokemonsUl = document.createElement('ul')
    pokemons.forEach(pokemon => {
        const pokemonLi = document.createElement('li')
        pokemonLi.textContent = `${pokemon.nickname} (${pokemon.species})`
        
        pokemonsUl.appendChild(pokemonLi).appendChild(generateReleaseButton(pokemon))
    })
    return pokemonsUl
}

const generateReleaseButton = (pokemon) => {
    const releaseButton = document.createElement('button')
    releaseButton.className = 'release'
    releaseButton.dataset.PokemonId = pokemon.id
    releaseButton.textContent = 'Release'  

    releaseButton.addEventListener('click', (e) => {
        pokemonId = e.currentTarget.dataset.PokemonId
        fetchReleasePokemon(`${POKEMONS_URL}/${pokemonId}`, releasePokemonConfigObj)
    })

    return releaseButton
}

const fetchNewPokemon = (pokemonsUrl, configObj) => {
    fetch(pokemonsUrl, configObj)
        .then(function(resp) {
            return resp.json()
        })
            .then(function(newPokemon) {
                addNewPokemonLi(newPokemon)
            })
                .catch(function(error) {
                    console.log(error.message)
                })
}

const addNewPokemonLi = (newPokemon) => {
    const ul = document.querySelector(`div[data-id="${newPokemon.trainer_id}"] ul`)
    const newPokemonLi = document.createElement('li')
    newPokemonLi.textContent = `${newPokemon.nickname} (${newPokemon.species})`
    ul.appendChild(newPokemonLi).appendChild(generateReleaseButton(newPokemon))
}

const fetchReleasePokemon = (url, configObj) => {
    fetch(url, configObj)
        .then(function(resp) {
            return resp.json()
        })
            .then(function(releasedPokemon) {
                removeReleasedPokemonLi(releasedPokemon)
            })
                .catch(function(error) {
                    console.log(error.message)
                })
}

const removeReleasedPokemonLi = (releasedPokemon) => {
    document.querySelector(`button[data--pokemon-id="${releasedPokemon.id}"]`).parentElement.remove()
}








