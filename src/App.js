import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Inicio from './components/Inicio/Inicio';
import Nosotros from './components/Nosotros/Nosotros';
import Productos from './components/Productos/Productos';
import Contacto from './components/Contacto/Contacto';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

// 4- Definimos cuales son los componentes que van a acceder a ese context 
import {CartProvider} from './store/cartContext'; 
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>        
        <CartProvider>
          {/* 4 */}
          {/* Todo lo que esta dentro del CartProvider son los children que recive por
          parametro el componente CartProvider */}
          <NavBar/>
          <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/nosotros' element={<Nosotros/>}/>
            <Route path='/productos' element={<Productos/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
            <Route path='/categoria/:idCategory' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
          <Footer/>
        </CartProvider>
      </BrowserRouter>  
    </div>
  );
}

export default App;
