import React from "react"
import { Link } from "react-router-dom"


export const Item = ({ item }) => {


    return (

        <div className="card" key={item.id}>
            <img src={item.car_img} alt="un auto"></img>
            <div className="card-date">
            <p><span>Marca:</span> {item.car_factory}</p>
            <p><span>Modelo:</span> {item.car_model}</p>
            <p><span>Precio:</span> {item.Price} USD</p>
            </div>
            
            <Link to={`/item/${item.id}`}><button>Mas Detalles</button></Link>
        </div>

    )

}

export default Item