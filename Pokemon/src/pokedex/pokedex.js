class Pokedex {
    constructor(){
        this.pokemonList = [];
    }

    catch(pokemon) {
        this.pokemonList.push(pokemon);

    }

    all() {
        return this.pokemonList;
    }
};

export default Pokedex;