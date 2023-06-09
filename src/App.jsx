import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { CartProvider } from "./context/cartContext"
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from "./Cart/Cart"

function App() {

  return (
    <CartProvider>
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
					<Route
						path="/"
						element={<ItemListContainer greeting="Productos" />}
					/>
					<Route
						path="/category/:id"
						element={<ItemListContainer greeting="Productos" />}
					/>
					<Route
						path="/item/:id"
						element={<ItemDetailContainer />}
					/>
					<Route path="/cart" element={<Cart />} />
				</Routes>
      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
