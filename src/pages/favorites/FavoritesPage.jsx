import { useEffect, useState } from "react"
import { PokemonCardComponent } from "../../components/PokemonCardComponent"



export const FavoritesPage = () => {

    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        console.log(localStorage.getItem("pokemonList"))
        console.log(JSON.parse(localStorage.getItem("pokemonList")))
        setPokemonList(JSON.parse(localStorage.getItem("pokemonList")))
    }, [])
    console.log(pokemonList)

    return <>
        {pokemonList.length > 0 ? <section>
            {pokemonList.map((pokemon, index) => {
                return <PokemonCardComponent
                     isFavoritePokemon={true} 
                     key={index} 
                     name={pokemon.name} 
                     url={pokemon.url}
                     favoritePokemonInformation={pokemon}/>
            })}
        </section> : <p>No hay pokemon en la lista</p>}
    </>
}