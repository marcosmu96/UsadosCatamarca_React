import React from "react";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import {
	getFirestore,
	collection,
	getDocs,
	query,
	where,
} from "firebase/firestore"
import ItemList from "../ItemList/ItemList";


const ItemListContainer = () => {



    const [list, setList] = useState([])
	const { id } = useParams()

	useEffect(() => {
		const db = getFirestore()

		const refCollection = id
			? query(
					collection(db, "items"),
					where("car_factory", "==", id)
			  )
			: collection(db, "items")

		getDocs(refCollection).then(snapshot => {
			if (snapshot.size === 0) setList([])
			else {
				setList(
					snapshot.docs.map(doc => ({
						id: doc.id,
						...doc.data(),
					}))
				)
			}
		})
	}, [id])





    // const [list, setList] = useState([]);
    // const { id } = useParams();

    // useEffect(() => {
    //     const productList = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(products)
    //         }, 2000);
    //     })
    //     productList.then(result => {

    //         if (id) {

    //             const productsFiltered = result.filter(
    //                 item => item.car_factory === id
    //             )

    //             setList(productsFiltered)
    //         } else {

    //             setList(result)
    //         }
    //     })
    // }, [id])

    return (
        <div className="catalogo">
            <ItemList list={list} />
        </div>
    )


}

export default ItemListContainer