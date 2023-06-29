import axios from "axios";


export const getAllPokemons = async () => {

    // return await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=40&limit=20");
    return await axios.get("https://pokeapi.co/api/v2/pokemon/",);
};