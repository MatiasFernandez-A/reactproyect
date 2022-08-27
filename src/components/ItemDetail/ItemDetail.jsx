import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
// importamoes el hook context de React
import {useContext} from 'react'; 
// importamos el context CartContext del archivo
import { cartContext } from '../../store/cartContext'; 
import { Link } from 'react-router-dom';
 
function ItemDetail({model,price,description,stock, image}) {

  /* Nos conectamos a traves del context a CartContext
  y a traves de destructuring llamamos a la funcion addToCart */
  const { addToCart } = useContext(cartContext);

  const [recount, setReCount] = useState(0); 

  function handleAdd (count){
    setReCount(count)
    const itemToCart = {model,price,description,stock, image}
    addToCart(itemToCart, count);   
  }

  
  return (  
    <div className='container-detail' >
      <div className='image-container'>
        <img className='imgage-product' src={`${image}`} alt={`${model}`} />
      </div>
      <div>
        <div className='item-detail'>
          <div className='model-container'>
            <h2>{model}</h2>
          </div>
          <div className='price-container'>
            <p>$ {price}</p>
          </div>
          <div className='description-container'>
            <p>{description}</p>
          </div>
          <div>
            {/* RENDER CONDICINAL  */}
          { recount === 0 ? 
            <ItemCount 
              stock={stock}
              initial="1" 
              onAdd={handleAdd}
            />
            : <Link to='/cart'>Ir al carrito</Link>
          }
          </div>
        </div>
      </div>

    </div>
  )
}

export default ItemDetail;