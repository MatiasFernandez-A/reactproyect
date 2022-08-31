import React, {useContext} from 'react'
import {cartContext} from '../../store/cartContext'
import ItemCart from '../ItemCart/ItemCart';

function Cart( ) {

  let {cart} = useContext(cartContext)

  console.log(cart);
  return (
    <div>
      {
        cart.map((item)=>{
          return (
              <ItemCart
                  model={item.model}
                  price={item.price}
                  img={item.img}
              />
          )
    }
  )
}
  </div>
)
}


export default Cart