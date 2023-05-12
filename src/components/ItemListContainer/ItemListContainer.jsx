import React from "react";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import products from "../../data/product.json"

const ItemListContainer = () => {
    const [list, setList] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const productList = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        })
        productList.then(result => {

            if (id) {

                const productsFiltered = result.filter(
                    item => item.car_factory === id
                )

                setList(productsFiltered)
            } else {

                setList(result)
            }
        })
    }, [id])

    return (
        <div className="catalogo">
            <ItemList list={list} />
        </div>
    )


}

export default ItemListContainer