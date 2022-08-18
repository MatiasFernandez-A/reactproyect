import React from 'react';
import "./ItemCount.css";
/* rfcd para activar snippets de react */

function ItemCount (props){
    const [count, setClicks] = React.useState(1);

    function handleIncrement () {
        if (count < props.stock){
            setClicks (count + 1);
        } else {
            alert("Ya no hay mas stock")
        }
    }
    function handleDecrement () {
        if (count > props.initial){
            setClicks (count - 1);
        } else {
            alert("Si o si tenes que llevar comprar al menos un producto")
        }               
    }

    const handleClick = () =>{
        props.onAdd(count)
    }


    return(
        <div className='counter-container'>
            <div className='buttons-container'>
                <button onClick={handleDecrement}> - </button>
                <h3>{count}</h3>
                <button onClick={handleIncrement}> + </button>
            </div>
            <div className='cartButtonContainer'>
                <button onClick={handleClick}>Finalizar compra</button>
            </div>
        </div>
    )
}
export default ItemCount;