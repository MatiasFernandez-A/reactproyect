import React from 'react'; 
import ItemListContainer from '../ItemListContainer/ItemListContainer';

function Productos() {
  return (
    <section className='productos-container'>
        <h2>Productos</h2>
        
        <ItemListContainer greeting="Guitarras acústicas" />
        
        {/* <ItemCount initial={1} stock={10}/>
          <ItemDetailContainer greeting="Contenedor de detalle"/>
         */}
    </section>
  )
}

export default Productos