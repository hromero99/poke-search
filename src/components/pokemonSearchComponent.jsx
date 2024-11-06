


export const PokemonSearchComponent = () => {

    const apiInformation = {
        "count": 1302,
        "next": "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
        "previous": null,
        "results": [
            {
                "name": "bulbasaur",
                "url": "https://pokeapi.co/api/v2/pokemon/1/"
            },
            {
                "name": "ivysaur",
                "url": "https://pokeapi.co/api/v2/pokemon/2/"
            },
            {
                "name": "venusaur",
                "url": "https://pokeapi.co/api/v2/pokemon/3/"
            },
            {
                "name": "charmander",
                "url": "https://pokeapi.co/api/v2/pokemon/4/"
            },
            {
                "name": "charmeleon",
                "url": "https://pokeapi.co/api/v2/pokemon/5/"
            },
            {
                "name": "charizard",
                "url": "https://pokeapi.co/api/v2/pokemon/6/"
            },
            {
                "name": "squirtle",
                "url": "https://pokeapi.co/api/v2/pokemon/7/"
            },
            {
                "name": "wartortle",
                "url": "https://pokeapi.co/api/v2/pokemon/8/"
            },
            {
                "name": "blastoise",
                "url": "https://pokeapi.co/api/v2/pokemon/9/"
            },
            {
                "name": "caterpie",
                "url": "https://pokeapi.co/api/v2/pokemon/10/"
            },
            {
                "name": "metapod",
                "url": "https://pokeapi.co/api/v2/pokemon/11/"
            },
            {
                "name": "butterfree",
                "url": "https://pokeapi.co/api/v2/pokemon/12/"
            },
            {
                "name": "weedle",
                "url": "https://pokeapi.co/api/v2/pokemon/13/"
            },
            {
                "name": "kakuna",
                "url": "https://pokeapi.co/api/v2/pokemon/14/"
            },
            {
                "name": "beedrill",
                "url": "https://pokeapi.co/api/v2/pokemon/15/"
            },
            {
                "name": "pidgey",
                "url": "https://pokeapi.co/api/v2/pokemon/16/"
            },
            {
                "name": "pidgeotto",
                "url": "https://pokeapi.co/api/v2/pokemon/17/"
            },
            {
                "name": "pidgeot",
                "url": "https://pokeapi.co/api/v2/pokemon/18/"
            },
            {
                "name": "rattata",
                "url": "https://pokeapi.co/api/v2/pokemon/19/"
            },
            {
                "name": "raticate",
                "url": "https://pokeapi.co/api/v2/pokemon/20/"
            }
        ]
    }
    const buttonPokemonSearchHandler = () => {
        let AllPokemonNames = apiInformation.results.map((pokemon, index) => {
            return pokemon.name
        })

        let userInputvalue = ""
        const pokemonInput = document.getElementById("pokemonInput")
        userInputvalue = pokemonInput.value

        const searchPokemonResult = AllPokemonNames.filter(pokemonName => {
            return pokemonName === userInputvalue
        })

        if (searchPokemonResult.length === 0) {
            alert("No existe el pokemon que buscas")
        }
        console.log(searchPokemonResult)
        console.log(userInputvalue)
        console.log(AllPokemonNames)
    }


    return <>
        <input id="pokemonInput" type="text" placeholder="Busca un pokemon" />
        <button type="submit" onClick={buttonPokemonSearchHandler}>Buscar</button>
    </>
}