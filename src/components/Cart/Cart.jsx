import { faBuildingCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import {cartContext} from '../../store/cartContext'
import ItemCart from '../ItemCart/ItemCart';
import './Cart.css';

function Cart( ) {

  let {cart, precioTotal} = useContext(cartContext)

  if (cart.length === 0 ) {
    return <div>
      <p>No hat productos en el carrito</p>
      <Link to='/productos'>Productos</Link>
    </div>
  }



  return (
    <div className='cart-container'>
      {
        cart.map((item)=>{
          return (
            <ItemCart
              key={item.id}
              id={item.id}
              model={item.model}
              price={item.price}
              quantity={item.quantity}
            />
          )
        })
      }
      <div className='precio-total-container'>
        <p className='precio-total'>
          Precio total $ 
          <span>{precioTotal()}</span>
        </p>
      </div>
    </div>
  )
}


export default Cart