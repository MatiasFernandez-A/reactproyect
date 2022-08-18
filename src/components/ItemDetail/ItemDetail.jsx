import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({model,price,description,stock}) {

  const [recount, setReCount] = useState([]); 

  function handleAdd (count){
    console.log("Agregar al carrito", recount);
    setReCount = count 
  }

  
  return (  
    <div className='item-detail' >
        <h2>{model}</h2>
        <p>$ {price}</p>
        <p>{description}</p>

        { recount === 0 ? 
          <ItemCount 
            stock={stock}
            initial="1" 
            onAdd={handleAdd}
          />
          : <a href='/cart'>Ir al carrito</a>
        }
    </div>
  )
}

export default ItemDetail;