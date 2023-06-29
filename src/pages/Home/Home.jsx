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
        setPokemonList(results.data.results)
      }).catch(error => console.log(error));
    }
  }, [pokemonList])
  console.log("-----", pokemonList)

  return(
      <div className="homeDesign">
          { pokemonList.length > 0 ? (
            <div className="cardStyle">
              {
                pokemonList.slice(0, 20).map(pokemonS => {
                  return (
                    <div key={pokemonS}>
                      <ProductCard 
                      name={pokemonS.name}/>
                        
                       
                    </div>
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