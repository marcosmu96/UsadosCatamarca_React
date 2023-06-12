
import React from "react";
import Item from "../Item/Item";

export const ItemList = ({ list }) => {

    return (
        <div className="card-container">

            <div className="loading">{!list.length && <section><span className="loader-93"> </span></section>}</div>

            {list.map(item => (

                <Item key={item.id} item={item} />

            ))}



            
        </div>
    )
}


export default ItemList


