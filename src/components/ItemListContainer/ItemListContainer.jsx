import "./ItemListContainer.css"
import React, {useEffect, useState} from 'react'
import itemsData from '../../data/data.js';
import ItemList from "../ItemList/ItemList.jsx";
import {useParams} from "react-router-dom"; 


function getProducts () {
    return new Promise ((resolve) => {
        setTimeout(()=> resolve (itemsData), 2000)
    })
}; 


export default function ItemListContainer ({greeting : g,}){
    
    const [data, setData]  = useState ([]); 

    const idCategory = useParams().idCategory;

    useEffect(() =>{
        getProducts()
            .then((respuesta) => {
                if (idCategory === undefined){
                    setData(respuesta)
                } else {
                    let filtrados = respuesta.filter( elemento => elemento.category === idCategory) 
                    setData(filtrados)
                }
        })
    }, []);

    return(
        <div>
            <h1 className="titulo">{g}</h1>
            <ItemList data={data}/>

        </div>
        
    );
}


