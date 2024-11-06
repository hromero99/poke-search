import "./app.css";
import { NavBarComponent } from "./components/NavBar/navbarComponent";
import { PokemonSearchComponent } from "./components/pokemonSearchComponent";


export const App = () => {


  return (
    <> {/* React.Fragment  o Fragment */}
      <header className="header">
        <NavBarComponent />
        <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" />
        <h1>The RESTful Pokémon API</h1>
        <h2> Serving over 2.5 billion API calls each month!</h2>
        <p>All the Pokémon data you'll ever need in one place,
          easily accessible through a modern free open-source RESTful API.</p>
      </header>
      <section>
        <h4>Search Pokemon</h4>
        <PokemonSearchComponent/>
      </section>
    </>
  )
}


