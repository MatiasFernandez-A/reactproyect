import React, {useContext} from 'react'
import "./ItemCart.css"
import { cartContext } from '../../store/cartContext'

function ItemCart({ model, price, quantity, id}) {

    let {eliminarItem, cart} = useContext(cartContext)

    function borrarItem() {
        eliminarItem(id)
    }

    return (
        cart ?
        <div>
            <div className="cart">
                <div className="cart-detail">
                    <h2>{model}</h2>
                </div>
                <div>
                    <h3>Precio por unidad $ {price}</h3>
                </div>
                <div>
                    <p>Cantidad: <span>{quantity}</span></p>
                </div>
                <div className="cart-button">
                    <button onClick={borrarItem}>X</button>
                </div>
            </div>
        </div>
        :
        <div></div>
      )
    
}

export default ItemCart