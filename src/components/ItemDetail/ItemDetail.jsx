
import React from "react";
import ItemCounter from "../ItemCounter/ItemCounter";

export const ItemDetail = ({ product , onAdd}) => {

return( 
<div className="detalles" key={product.id}>
<div className="loading">{!product.car_img && <section><span className="loader-93"> </span></section> }</div>

{product.car_img && <div> <h1>MARCA:{product.car_factory}</h1>
<h2>MODELO:{product.car_model}</h2>
<img src={product.car_img} alt="Imagen del auto Destacado"></img>
<h2>PRECIO:{product.Price}USD</h2>
<h3>CANTIDAD A LA VENTA:{product.stock}</h3>
<h3>AÑO:{product.car_year}</h3>
<ItemCounter stock = {product.stock} onAdd={onAdd}/></div>}

</div>

)
}


export default ItemDetail;