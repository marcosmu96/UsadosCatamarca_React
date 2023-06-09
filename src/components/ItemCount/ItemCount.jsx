import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const ItemCount = ({ stock, onAdd, initial }) => {

    const [counter, setCounter] = useState(initial ?? 0);


    useEffect(() => {
        if (counter > 0) onAdd(stock - counter);

    }, [counter])


    const handlerIncreaseCount = () => {

        if (stock > counter) setCounter(counter + 1)

    }

    const handlerDecreaseCount = () => {

        if (counter > 0) setCounter(counter - 1)
    }



    return (
        <div>
            {stock > 0 ? (
                <>
                    <p onClick={handlerIncreaseCount}>+</p>
                    <p>{counter}</p>
                    <p onClick={handlerDecreaseCount}>-</p>
                    {!!counter && (
                        <button onClick={() => onAdd(counter)}>Agregar al Carrito
                        </button>
                    )}
                    <p>Stock Disponible: {stock - counter}</p>
                </>
            ) : (
                <>
                    <div className="mt-4">No hay stock</div>
                    <Link to="/">
                        <button>
                            Seguir comprando
                        </button>
                    </Link>
                </>
            )}
        </div>
    )
            }
    export default ItemCount;