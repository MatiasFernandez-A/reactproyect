import React from 'react'; 
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import "./Productos.css"; 

function Productos() {
  return (
    <section className='productos-container'>        
        <ItemListContainer/>
        
        {/* <ItemCount initial={1} stock={10}/>
          <ItemDetailContainer greeting="Contenedor de detalle"/>
         */}
    </section>
  )
}

export default Productos