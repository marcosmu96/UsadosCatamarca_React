import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {

const ondAdd = stock => console.log("Stock Restante: " + stock)

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />}
           />
          <Route path='/category/:id' element={<ItemListContainer />}
           />
          <Route path='/item/:id' element={<ItemDetailContainer onAdd = {ondAdd}/>}  
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
