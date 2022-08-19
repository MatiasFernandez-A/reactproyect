import React, {useEffect, useState} from 'react'
import itemsData from '../../data/data.js';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'



export default function ItemDetailContainer (props){
    
    const [item, setItem]  = useState ([]); 

    const idRoute = useParams().id;

    function getProducts () {
        return new Promise ((resolve,reject) => {
            let itemSolitado = itemsData.find((elemento)=> elemento.id == idRoute);

            if (itemSolitado === undefined) 
                reject ("No se encontro el producto")
            else 
                setTimeout(() => {
                    resolve(itemSolitado)
                }, 1000);
        })
    }; 


    useEffect(() =>{
        getProducts().then((respuesta) => {
            setItem(respuesta); 
        });
    }, []);

    return(
        <div className='item-detail-container'>
            <ItemDetail image={item.img} model={item.model} price={item.price} description={item.description} stock={item.stock}/>
        </div>
        
    );
}

