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










