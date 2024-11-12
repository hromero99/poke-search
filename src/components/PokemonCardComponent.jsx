import { useEffect } from "react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

/*
props que necesito

name: string que corresponde con el nombre del pokemon
url: string que corresponde con la url de la api para ese pokemon

¿Qué información puede manejar mi componente?

*/
export const PokemonCardComponent = (props) => {

    console.log(props)
    const [pokemonInformation, setPokemonInformation] = useState(null)
    const [isInformationLoaded, setIsInformationLoaded] = useState(false)

    useEffect(() => {

        if (props.url) {
            setIsInformationLoaded(false)
            fetch(props.url).then((response) => {

                response.json().then((data) => {
                    console.log(data)
                    // Como aqui uso los set del useState mi componente se actualiza para poder mostrar la nueva informacion
                    setPokemonInformation(data)
                    setIsInformationLoaded(true)
                })
            })
        }

        if (props.isFavoritePokemon){
            console.log(props)
            setPokemonInformation(props.favoritePokemonInformation)
            setIsInformationLoaded(true)
        }
    }, [props])

    console.log(pokemonInformation)

    const addPokemonToFavoriteButton = () => {
        const currentPokemonListInLocalStorage = localStorage.getItem("pokemonList")
        if (currentPokemonListInLocalStorage === null) {
            let pokemonInformationInString = JSON.stringify([pokemonInformation])
            localStorage.setItem("pokemonList", pokemonInformationInString)
        } else {
            const currentPokemonList = JSON.parse(currentPokemonListInLocalStorage)
            currentPokemonList.push(pokemonInformation)
            localStorage.setItem("pokemonList", JSON.stringify(currentPokemonList))
        }

    }
    
    console.log(pokemonInformation)
    return <article>
        {isInformationLoaded === true ? <>

            <img src={pokemonInformation.sprites.back_default} />
            <img src={pokemonInformation.sprites.front_default} />
            <h4>{props.name}</h4>
            <NavLink to={`/pokemon/${pokemonInformation.id}`}>Más información</NavLink>
            {props.isFavoritePokemon ? <></> : <button onClick={addPokemonToFavoriteButton}>Agregar Favorito</button>}
        </> : <p>Loading</p>}


    </article>

}