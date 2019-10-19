class PokemonsController < ApplicationController
    def create
       trainer = Trainer.find_by(id: params[:trainer_id])
       pokemon = Pokemon.create_with_faker(trainer) if trainer.pokemons.count < 6
       render json: PokemonSerializer.new(pokemon).to_serialized_json
    end

    def destroy
        pokemon = Pokemon.find_by(id: params[:id])
        pokemon.destroy 
        render json: PokemonSerializer.new(pokemon).to_serialized_json
    end
end