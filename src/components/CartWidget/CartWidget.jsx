import React from "react";
import { useContext } from "react"
// import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/cartContext"
import Carrito from "./assets/carro-de-la-compra.png"

const CartWidget = () => {

    const { productosAgregados } = useContext(CartContext)

    const totalQuantity = () =>
        productosAgregados.reduce(
            (acumulador, valorActual) =>
                acumulador + valorActual.quantity,
            0
        )

    return (
        <NavLink className="carrito34"  to={`/Cart`}>
        
           
                <img className="carrito" src={Carrito} alt="foto auto"></img>
                <p className="contador">{totalQuantity()}</p>

            
        
        </NavLink>
    )
}

export default CartWidget
