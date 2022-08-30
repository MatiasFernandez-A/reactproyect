import React, {useContext} from 'react'
import {cartContext} from '../../store/cartContext'

function Cart( ) {

  let cartView = useContext(cartContext)
  console.log(`Esto hay dentro del carrito ${cartView}`);

  return (
    <div>
      <p>Esta es la pagina de carrito</p>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <p>model</p>
          <p>Precio</p>
        </div>
        <div>
          <button>Eliminar</button>
        </div>
      </div>
    </div>
  )
}

export default Cart