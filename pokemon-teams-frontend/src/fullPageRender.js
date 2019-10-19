function fetchTrainers() {
    fetch(TRAINERS_URL)
        .then(resp => resp.json())
            .then(json => renderTrainerCards(json));
}

const renderTrainerCards = (trainers) => {
    trainers.forEach(trainer => {
        generateTrainerCard(trainer)
    })
}

const generateTrainerCard = (trainer) => {
    const cardDiv = document.createElement('div')
    cardDiv.classname = 'card'
    cardDiv.dataset.id = trainer.id 

    const name = document.createElement('p')
    name.innerText = trainer.name
    cardDiv.appendChild(name)

    cardDiv.appendChild(generateAddPokemonButton(trainer))

    cardDiv.appendChild(generatePokemonsUl(trainer.pokemons))
    
    document.body.appendChild(cardDiv)
}