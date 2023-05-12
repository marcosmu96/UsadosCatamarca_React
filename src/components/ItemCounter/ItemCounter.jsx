import { useState,  useEffect } from "react";


export const ItemCounter = ({stock , onAdd}) => {

const [counter , setCounter] = useState(0);


useEffect(() => {
    if (counter > 0)  onAdd(stock - counter);

}, [counter])


const handlerIncreaseCount =()=>{

    if(stock > counter) setCounter(counter + 1)

}

const handlerDecreaseCount = () => {

    if(counter > 0) setCounter(counter - 1)
}



return(
    <div>
    <p onClick={handlerIncreaseCount}>+</p>
    <p>{counter}</p>  
<p onClick={handlerDecreaseCount}>-</p>

<p>Stock Disponible: {stock - counter}</p>
    </div>
)

}


export default ItemCounter;