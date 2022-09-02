
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'; 

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

export default firestoreDB;