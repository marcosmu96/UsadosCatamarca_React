
import { NavLink } from "react-router-dom"
import Logo from "./assets/logo-autosusados.png"
import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {



     return (
        <div>
            <header>
                <img className="logo" src={Logo} alt="foto del logo"></img>
                <nav>
                <NavLink to="/">HOME</NavLink>
                <NavLink  to={`/category/Eagle`}>Eagle</NavLink>
                <NavLink  to={`/category/bmw`}>BMW</NavLink>
                <NavLink to={`/category/Volvo`}>VOLVO</NavLink>
                <NavLink  to={`/category/Toyota`}>TOYOTA</NavLink>
                <NavLink  to={`/category/Jaguar`}>JAGUAR</NavLink>
                <NavLink  to={`/category/Oldsmobile`}>Oldsmobile</NavLink>
                </nav>
                <div className="carrito2">
                    <CartWidget/>

                </div>

            </header>

            

        </div>
    )
}


export default NavBar