// 1- Importamos el context con React.createContext ()
import { computeHeadingLevel } from "@testing-library/react";
import { createContext, useState } from "react";

// 2- Creamos un nuevo contexto y lo exportamos porque sino no funciona

export const cartContext = createContext();

// 3- Genero el provider con PhascalCase

export function CartProvider ({children}){

    // Estado del carrito que en pricipio esta vacio 

    const [cart, setCart] = useState([]);
    
    function addToCart(item, count){

        if (isInCart(item.id)){
            console.log("El producto esta en el carrito")
        } else {
            let copyCart = [...cart]; // Hacemos una copia del estado del carrito
            copyCart.push ({...item, quantity: count});
            
            setCart(copyCart);
        }
    }
    function isInCart (id) {
        return(cart.some(itemInCart => itemInCart.id === id))
    }

    return(
        /* Le damos un value con el estado cart que permite que todos los componentes que lean CartProvider puedan tambien leer el estado */
        <cartContext.Provider value={{cart, addToCart}}>
            {children}
        </cartContext.Provider>
    )
}
