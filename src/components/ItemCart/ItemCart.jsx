import React from 'react'

function ItemCart({ model, price, img}) {
  return (
    <div>
        <div className="card">
        <div className="card-img">
            <img src={img} alt="imagen" />
        </div>
        <div className="card-detail">
            <h2>{model}</h2>
            <h3>$ {price}</h3>
        </div>
        <div className="card-button">
            <button>X</button>
        </div>
        </div>
    </div>
  )
}

export default ItemCart