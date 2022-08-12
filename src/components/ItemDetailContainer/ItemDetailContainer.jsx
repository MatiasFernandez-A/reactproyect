import React, {useEffect, useState} from 'react'
import itemsData from '../../data/data.js';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';

function getProducts () {
    return new Promise ((resolve,reject) => {
        setTimeout(
            ()=> resolve (itemsData[0]),2000)
    })
}; 


export default function ItemDetailContainer (props){
    
    const [item, setItem]  = useState ([]); 
    useEffect(() =>{
        getProducts().then((respuesta) => {
            setItem(respuesta); 
        });
    }, []);

    return(
        <div>
            <h1 className="titulo">{props.greeting}</h1>
            <ItemDetail  model={item.model} price={item.price} description={item.description}/>
        </div>
        
    );
}

