import React from 'react'
import "./ItemCart.css"

function ItemCart({ model, price}) {
  return (
    <div>
        <div className="cart">
            <div className="cart-detail">
                <h2>{model}</h2>
            </div>
            <div>
                <h3>$ {price}</h3>
            </div>
            <div className="cart-button">
                <button>X</button>
            </div>
        </div>
    </div>
  )
}

export default ItemCart