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