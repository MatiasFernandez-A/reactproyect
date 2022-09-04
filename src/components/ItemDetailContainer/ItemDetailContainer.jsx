import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'
import firestoreDB from '../../services/firebase.js';
import { collection, doc, getDoc } from "firebase/firestore";



export default function ItemDetailContainer (){
    
    const [item, setItem]  = useState ([]); 

    const idRoute = useParams().id;

    function getToDoById(id) {
        return new Promise((resolve, reject) => {
          const guitarsCollectionRef = collection(firestoreDB, "guitars");
          const docRef = doc(guitarsCollectionRef, id);
    
          getDoc(docRef).then((snapshot) => {
            resolve({ ...snapshot.data(), id: snapshot.id });
          });
        });
      }
    
      useEffect(() => {
        getToDoById(idRoute)
          .then((respuesta) => setItem(respuesta))
          .catch((error) => alert(error));
      }, []);
      
    return(
        <div className='item-detail-container'>
            <ItemDetail item={item}/>
        </div>
        
    );
}

