import { useState, useContext } from "react"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { CartContext } from "../../context/cartContext"
import './cart.css'
export const Cart = () => {
	const [formValues, setFormValues] = useState({
		name: "",
		phone: "",
		email: "",
	})

	const { productosAgregados, deleteItem, clear } =
		useContext(CartContext)

	const sendOrder = () => {
		const order = {
			buyer: formValues,
			items: productosAgregados,
			total: total(),
		}

		const db = getFirestore()
		const orderCollection = collection(db, "orders")

		addDoc(orderCollection, order).then(response => {
			if (response.id) {
				clear()
				alert("Su orden: " + response.id + " ha sido completada!")
			}
		})
	}

	const handleChange = ev => {
		setFormValues(prev => ({
			...prev,
			[ev.target.name]: ev.target.value,
		}))
	}

	const total = () =>
		productosAgregados.reduce(
			(acumulador, valorActual) =>
				acumulador + valorActual.quantity * valorActual.Price,
			0
		)

	return (
		<div className="terminos">
			<h1>LISTA DE PRODUCTOS</h1>
			{!productosAgregados.length ? (
				<mark>NO HAY PRODUCTOS</mark>
			) : (
				<>
					<table>
						<thead>
							<tr>
								<th>Nombre</th>
								<th></th>
								<th>Precio</th>
								<th>Cantidad</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{productosAgregados.map(producto => (
								<tr key={producto.id}>
									<td>{producto.car_model}</td>
									<td>
										<img
											height={60}
											src={producto.car_img}
											alt={producto.car_model}
										/>
									</td>
									<td>{producto.Price}USD</td>
									<td>{producto.quantity}</td>
									<td>
										<button
											onClick={() =>
												deleteItem(producto.id)
											}
										>
											Eliminar
										</button>
									</td>
								</tr>
							))}
						</tbody>
						<tfoot>
							<tr>
								<td>Total</td>
								<td></td>
								<td></td>
								<td>{total()}</td>
								<td></td>
							</tr>
						</tfoot>
					</table>
					<h2>INGRESAR DATOS DE USUARIO</h2>
					<form>
						<label for="name">Nombre:</label>
						<input type="text" name="name" controlId="formBasicEmail" value={formValues.name} onChange={handleChange}></input>

						<label for="email">Email:</label>
						<input type="email" name="email" controlId="formBasicEmail" value={formValues.email} onChange={handleChange}></input>

						<label for="phone">Telefono:</label>
						<input type="text" name="phone" controlId="formBasicEmail" value={formValues.phone} onChange={handleChange}></input>

					
					
						<button variant="primary"
							type="button" className="boton23"  onClick={sendOrder}>
							Enviar
						</button>
					</form>
				</>
			)}
		</div>
	)
}