import Pokedex from "./pokedex";

test("We can create a pokedex", () => {
    const pokedex = new Pokedex();
});


test("We can catch pokemon", () => {
    const pokedex = new Pokedex();
    pokedex.catch('pikachu');
    // pokedex.catch('jigglypuff'); 
    expect(pokedex.all()).toEqual(["pikachu"])
    
    pokedex.catch('jigglypuff');
    expect(pokedex.all()).toEqual(["pikachu", "jigglypuff"])

});

