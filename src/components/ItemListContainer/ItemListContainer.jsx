import "./ItemListContainer.css"
import React, {useEffect, useState} from 'react'
import ItemList from "../ItemList/ItemList.jsx";
import {useParams} from "react-router-dom"; 

import firestoreDB from "../../services/firebase";
import { getDocs, collection, query, where} from "firebase/firestore";

const getItemsFromDB = () => {

    return new Promise((resolve) => {

      const guitarsCollection = collection(firestoreDB, "guitars");
  
      getDocs(guitarsCollection).then((snapshot) => { 

        const docsData = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        
        resolve(docsData);
      });
    });
};

const getItemsFromDBbyCategory = (category) => {
    return new Promise((resolve) => {
      const todosCollectionRef = collection(firestoreDB, "guitars");
  
      const q = query(todosCollectionRef, where("category", "==", category));
  
      getDocs(q).then((snapshot) => {
        const docsData = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        resolve(docsData);
      });
    });
};


export default function ItemListContainer (){
    
    const [products, setProducts] = useState([]);

    const idCategory = useParams().idCategory;

    useEffect (() =>{
        if (idCategory === undefined){
            getItemsFromDB().then((respuesta) => { 
            setProducts(respuesta);
        })
        } else {
            getItemsFromDBbyCategory(idCategory).then((respuesta) => {
                setProducts(respuesta);
            })
        }
    }, [idCategory]);


    
    return(
        <div>
            <ItemList data={products}/>
        </div>
        
    );
}


