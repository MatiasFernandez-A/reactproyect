import "./ItemListContainer.css"
import React, {useEffect, useState} from 'react'
import itemsData from '../../data/data.js';
import Item from "../Item/Item";
import ItemList from "../ItemList/ItemList.jsx";

function getProducts () {
    return new Promise ((resolve) => {
        setTimeout(()=> resolve (itemsData), 2000)
    })
}; 


export default function ItemListContainer (props){
    
    const [data, setData]  = useState ([]); 
    useEffect(() =>{
        getProducts().then((respuesta) => {
            setData(respuesta); 
        });
    }, []);

    return(
        <div>
            <h1 className="titulo">{props.greeting}</h1>
            <ItemList data={data}/>
        </div>
        
    );
}


