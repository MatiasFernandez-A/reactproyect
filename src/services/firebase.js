
import { initializeApp } from "firebase/app";
import {addDoc, collection, getFirestore} from 'firebase/firestore'; 
import itemsData from "../data/data";



const firebaseConfig = {
  apiKey: "AIzaSyAZcS0PMInQx8d4qHJiHwTfj_zKbVXOa8M",
  authDomain: "miapp-react.firebaseapp.com",
  projectId: "miapp-react",
  storageBucket: "miapp-react.appspot.com",
  messagingSenderId: "546151874513",
  appId: "1:546151874513:web:c47a2528d990c52a776af0"
};

const app = initializeApp(firebaseConfig);

const firestoreDB = getFirestore(app)


// esta funcion sirve para subir itemsData a firebase

export async function saveProductsToFirebase () {
  const collectionGuitars = collection(firestoreDB, "guitars")
  
  for (let item of itemsData ){
    const docref = await addDoc(collectionGuitars,item)
    console.log("documento creado con id ", docref.id);
  }
}

export default firestoreDB;