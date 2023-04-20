import React from "react" 
import Logo from "../images/logo-autosusados.png"
import CartWidget from "../components/CartWidget"

const ItemListContainer = ({greeting}) => {

    return (
        <div>
            <header>
            <img className="logo" src={Logo}></img>
                <nav>
                    <a href="#">Catalogo</a>
                    <a href="#">Noticias</a>
                    <a href="#">Clasificados</a>
                    <a href="#">Guia de Precios</a>
                    <a href="#">Comparador</a>
                    <CartWidget contador={"0"}/>
                </nav>
            </header>
            {greeting}
        </div>
    )
}


export default ItemListContainer