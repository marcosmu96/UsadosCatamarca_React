import { useContext } from "react"
import { Link } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount"
import { CartContext } from "../../context/cartContext"
import './itemDetail.css'

export const ItemDetail = ({ product }) => {
	const { addItem } = useContext(CartContext)

	const onAdd = quantity => addItem(product, quantity)



	const { productosAgregados } = useContext(CartContext)

	const totalQuantity = () =>
		productosAgregados.reduce(
			(acumulador, valorActual) =>
				acumulador + valorActual.quantity,
			0
		)



	return (
		<div className="detalles" key={product.id}>
			<div className="loading">{!product.car_img && <section><span className="loader-93"> </span></section>}</div>

			<div className="itemdetail">
				{product.car_img && <div> <h1>MARCA: <span> {product.car_factory} </span></h1>
					<h2>MODELO: <span>{product.car_model} </span></h2>
					<img src={product.car_img} alt="Imagen del auto Destacado"></img>
					<h2>PRECIO: {product.Price}USD</h2>
					<h3>CANTIDAD A LA VENTA: {product.stock}</h3>
					<h3>AÑO: {product.car_year}</h3>
					<ItemCount stock={product.stock} onAdd={onAdd} /></div>}

				{!!totalQuantity() && (
					<Link to="/cart">
						<button>Terminar mi compra</button>
					</Link>
				)}
			</div>
		</div>

	)
}


export default ItemDetail;