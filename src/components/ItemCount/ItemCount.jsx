import { useState } from "react";
import { Link } from "react-router-dom";

export const ItemCount = ({ stock, onAdd, initial }) => {



    const [counter, setCounter] = useState(initial ?? 0)

	const handleIncreaseCount = () => {
		if (stock > counter) setCounter(counter + 1)
	}

	const handleDecreaseCount = () => {
		if (counter > 0) setCounter(counter - 1)
	}




    return (
        <div className="contador">
            {stock > 0 ? (
                <div className="suma-resta">
                    <div>
                        <p onClick={handleIncreaseCount}>+</p>
                        <h4 className="suma-resta-mid">{counter}</h4>
                        <p onClick={handleDecreaseCount}>-</p>
                    </div>
                    {!!counter && (
                        <button onClick={() => onAdd(counter)}>Agregar al Carrito
                        </button>
                    )}
                    <p>Stock Disponible: {stock - counter}</p>
                </div>
            ) : (
                <div>
                    <div className="">No hay stock</div>
                    <Link to="/">
                        <button>
                            Seguir comprando
                        </button>
                    </Link>
                </div>
            )}
        </div>
    )
}
export default ItemCount;