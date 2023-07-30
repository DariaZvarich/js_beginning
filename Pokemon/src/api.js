import fetch from "node-fetch";

async function fetchPokemon(pokemonName) {
    try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();
    const pokemonInfo = {
        name: data.name,
        id: data.id,
        height: data.height,
        weight: data.weight,
        types: data.types.map((typeData) => typeData.type.name),
    };
    return pokemonInfo;
    } catch (error) {
    throw new Error('Error fetching Pokémon data: ' + error.message);
    }
}

export default fetchPokemon;
//     try {
//         const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Error fetching Pokemon data:", error.message);
//     }
// }

// export default fetchPokemon;