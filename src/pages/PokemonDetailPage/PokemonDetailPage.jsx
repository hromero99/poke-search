import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"


export const PokemonDetailPage = () => {
    const { id } = useParams()
    const [pokemonInformation, setPokemonInformation] = useState(null)
    const [isInformationLoaded, setIsInformationLoaded] = useState(false)

    useEffect(() => {

        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {

            response.json().then((data) => {
                console.log(data)
                // Como aqui uso los set del useState mi componente se actualiza para poder mostrar la nueva informacion
                setPokemonInformation(data)
                setIsInformationLoaded(true)
            })
        })
    }, [])

    return <article>
        {isInformationLoaded === true ? <>

            <img src={pokemonInformation.sprites.back_default} />
            <img src={pokemonInformation.sprites.front_default} />
            <h4>{pokemonInformation.name}</h4>
            <img src={pokemonInformation.sprites.back_default} /></> : <p>Loading</p>}

    </article>
}