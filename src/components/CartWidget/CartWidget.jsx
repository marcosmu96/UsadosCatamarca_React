import React from "react";
import Carrito from "./assets/carro-de-la-compra.png"

const CartWidget = ({ contador }) => {

    return (

        <>
            <img className="carrito" src={Carrito}></img>
            <p href="#" className="contador"> {contador}</p>
        </>

    )
}

export default CartWidget
