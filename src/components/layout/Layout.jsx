import { NavLink, Outlet } from "react-router-dom"
import "./navbar.css"

export const Layout = () => {

    return <>
        <nav className="navbar">
            <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" />
            <ul className="linkList">
                <NavLink to="/">Pokemon</NavLink>
                <NavLink to="/locations">Ciudades</NavLink>
            </ul>

        </nav>
        <Outlet />
        <footer>
            <p>C@ Oxygen</p>
        </footer>
    </>
}