import React from "react";
import Carrito from "../images/carro-de-la-compra.png"

const CartWidget = ({ contador }) => {

    return (
        <>
            <a>
                <img className="carrito" src={Carrito}></img>
                <p className="contador">{contador}</p>
            </a>
        </>
    )
}

export default CartWidget
