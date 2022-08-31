import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
// importamoes el hook context de React
import {useContext} from 'react'; 
// importamos el context CartContext del archivo
import { cartContext } from '../../store/cartContext'; 
import { Link } from 'react-router-dom';
 
function ItemDetail({item}) {

  /* Nos conectamos a traves del context a CartContext
  y a traves de destructuring llamamos a la funcion addToCart */
  const { addToCart } = useContext(cartContext);

  const [recount, setReCount] = useState  (0); 

  function handleAdd (count){
    setReCount(count) 
    addToCart(item, count);   
  }

  
  return (  
    <div className='container-detail' >
      <div className='image-container'>
        <img className='imgage-product' src={`${item.img}`} alt={`${item.model}`} />
      </div>
      <div>
        <div className='item-detail'>
          <div className='model-container'>
            <h2>{item.model}</h2>
          </div>
          <div className='price-container'>
            <p>$ {item.price}</p>
          </div>
          <div className='description-container'>
            <p>{item.description}</p>
          </div>
          <div>
            {/* RENDER CONDICINAL  */}
          { recount === 0 ? 
            <ItemCount 
              stock={item.stock}
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