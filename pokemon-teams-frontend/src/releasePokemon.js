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