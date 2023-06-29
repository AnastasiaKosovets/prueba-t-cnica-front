import React, { useEffect, useState } from "react";
import "./Home.css";
import { getAllPokemons } from "../../services/apiCalls";
import { ProductCard } from "../../common/ProductCard/ProductCard";

export const Home = () => {

    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
      if(pokemonList.length === 0){
        getAllPokemons()
        .then( results => {
          setPokemonList(results.data)
        }).catch(error => console.log(error));
      }
    }, [pokemonList])
    console.log("-----", pokemonList)

    return(
        <div className="homeDesign">Pokemons:
            { pokemonList.length > 0 ? (
              <div>
                {
                  pokemonList.slice(0, 2).map(pokemonS => {
                    return (
                      <diV key={pokemonS.name}>
                        {pokemonS.name}
                      </diV>
                    )
                  })
                }
              </div>
            ) : (
              <div>Not Found...</div>
            )}
        </div>
    )
}