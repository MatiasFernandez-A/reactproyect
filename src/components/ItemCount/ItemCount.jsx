import React from 'react';
import "./ItemCount.css";
/* rfcd para activar snippets de react */

function ItemCount (props){
    const [clicks, setClicks] = React.useState(1);

    function handleIncrement () {
        if (clicks < props.stock){
            setClicks (clicks + 1);
        } else {
            alert("Ya no hay mas stock")
        }
    }
    function handleDecrement () {
        if (clicks > props.initial){
            setClicks (clicks - 1);
        } else {
            alert("Si o si tenes que llevar comprar al menos un producto")
        }
    }

    return(
        <div className='counter-container'>
            <h3>Contador</h3>
            <div className='buttons-container'>
                <button onClick={handleDecrement}> - </button>
                <h3>{clicks}</h3>
                <button onClick={handleIncrement}> + </button>
            </div>
            <div className='cartButtonContainer'>
                <button>Agregar al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount;