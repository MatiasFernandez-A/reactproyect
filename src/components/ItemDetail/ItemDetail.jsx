import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

function ItemDetail({model,price,description,stock, image}) {

  const [recount, setReCount] = useState([]); 

  function handleAdd (count){
    console.log(stock)
    console.log("Agregar al carrito", setReCount);
    setReCount = count 
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
          { recount === 0 ? 
            <ItemCount 
              stock={stock}
              initial="1" 
              onAdd={handleAdd}
            />
            : <a href='/cart'>Ir al carrito</a>
          }
          </div>
        </div>
      </div>

    </div>
  )
}

export default ItemDetail;