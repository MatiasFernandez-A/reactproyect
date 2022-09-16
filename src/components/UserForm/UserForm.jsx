import React, { useState } from "react";
import "./userform.css";
import { collection, addDoc } from "firebase/firestore";
import firestoreDB from "../../services/firebase";
import {useContext} from 'react';
import { cartContext } from "../../store/cartContext";


function UserForm({ cart }) {
 
  let {vaciarCarrito} = useContext(cartContext)


  const [userData, setUserData] = useState({
    name: "",
    email: "",
    telefono: "",
  });

  const [orderId, setOrderId] = useState(null);

  let total = 0;

  cart.forEach((item) => (total += item.price * item.quantity));

  const ordenDeCompra = {
    buyer: { ...userData },
    items: { cart },
    total: total,
    date: new Date(),
  };

  async function handleSubmit(evt) {
    evt.preventDefault();

    //Nos conectamos a firebase
    const collectionRef = collection(firestoreDB, "orders");
    const docRef = await addDoc(collectionRef, ordenDeCompra);

    setOrderId(docRef.id);

    vaciarCarrito()

  }

  function inputChangeHandler(evt) {
    const input = evt.target;

    const value = input.value;
    const inputName = input.name;

    let copyUserData = { ...userData };

    copyUserData[inputName] = value;
    setUserData(copyUserData);
  }

  function handleReset() {
    vaciarCarrito()
    setUserData({
      name: "",
      email: "",
      telefono: "",
    });
  }

  if (orderId){
    return (
      <div>
        <h1>Gracias por tu compra </h1>
        <p>El id de seguimiento de tu compra es: {orderId}</p>
      </div>
    );
  }


  return (
    <div className="form-container">
      <form onReset={handleReset} onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="name">Nombre</label>
          <input
            value={userData.name}
            onChange={inputChangeHandler}
            name="name"
            type="text"
            placeholder="Nombre"
            required  
          />
        </div>

        <div className="form-item">
          <label htmlFor="telefono">Telefono</label>
          <input
            value={userData.telefono}
            onChange={inputChangeHandler}
            name="telefono"
            type="text"
            placeholder="Telefono"
            required
          />
        </div>

        <div className="form-item">
          <label htmlFor="email">Email</label>
          <input
            value={userData.email}
            onChange={inputChangeHandler}
            name="email"
            type="text"
            placeholder="Correo"
            required
          />
        </div>

        <div>
          <button type="submit" onClick={handleSubmit}>
            Finalizar Compra
          </button>
          <button type="reset">Vaciar Carrito</button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
