import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import Logo from "./assets/logo-autosusados.png"
import CartWidget from "../CartWidget/CartWidget"
import products from "../../data/product.json"

const NavBar = () => {

const [itemMenu , setItemMenu] = useState([])


useEffect(()=>{

const productsList = new Promise((resolve, reject) => {
    resolve(products)
})

productsList.then(result => {
const categories = result.map(item => item.car_factory)
const uniqueCategories = new Set(categories)
// console.log(uniqueCategories)
    setItemMenu([...uniqueCategories].sort())
})

},[])


     return (
        <div>
            <header>
                <img className="logo" src={Logo} alt="foto del logo"></img>
                <nav>
                <NavLink to="/">HOME</NavLink>
                   
                  
                    {itemMenu.map(item => (
                        <NavLink key={item} to={`/category/${item}`}>{item.toUpperCase()}</NavLink> 
                    ))}
              
                </nav>
                <div className="carrito2">
                    <CartWidget count={"0"} />

                </div>

            </header>

            

        </div>
    )
}


export default NavBar