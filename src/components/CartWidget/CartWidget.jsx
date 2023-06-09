import React from "react";
import { useContext } from "react"
// import { Link } from "react-router-dom"

import { CartContext } from "../../context/cartContext"
import Carrito from "./assets/carro-de-la-compra.png"

const CartWidget = ({ count }) => {

    const { productosAgregados } = useContext(CartContext)

	const totalQuantity = () =>
		productosAgregados.reduce(
			(acumulador, valorActual) =>
				acumulador + valorActual.quantity,
			0
		)

    return (

        <>
            <img className="carrito" src={Carrito}></img>
            <p href="#" className="contador"> {totalQuantity}</p>
        </>

    )
}

export default CartWidget
