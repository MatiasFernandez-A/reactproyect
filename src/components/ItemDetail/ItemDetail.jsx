import React from 'react'

function ItemDetail({model,price,description}) {
    return (
      <div>
        <h2>{model}</h2>
        <p>$ {price}</p>
        <p>{description}</p>
      </div>
    )
}

export default ItemDetail;