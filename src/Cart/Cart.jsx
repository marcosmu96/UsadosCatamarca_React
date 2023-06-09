import { useState, useContext } from "react"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { CartContext } from "../context/cartContext"

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
				acumulador + valorActual.quantity * valorActual.price,
			0
		)

	return (
		<div>
			<h1>Lista productos</h1>
			{!productosAgregados.length ? (
				<mark>No hay productos</mark>
			) : (
				<>
					<table striped bordered hover variant="dark">
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
									<td>{producto.title}</td>
									<td>
										<img
											height={60}
											src={producto.imageId}
											alt={producto.title}
										/>
									</td>
									<td>{producto.price}</td>
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
					<h2>Ingresar datos de usuario</h2>
					<form>
						<label for="name">Nombre</label>
						<input type="text" name="name" controlId="formBasicEmail" value={formValues.name} onChange={handleChange}></input>

						<label for="email">Email</label>
						<input type="email" name="email" controlId="formBasicEmail" value={formValues.email} onChange={handleChange}></input>

						<label for="phone">Tel</label>
						<input type="text" name="phone" controlId="formBasicEmail" value={formValues.phone} onChange={handleChange}></input>

					
					
						<button
							variant="primary"
							type="button"
							onClick={sendOrder}
						>
							Submit
						</button>
					</form>
				</>
			)}
		</div>
	)
}