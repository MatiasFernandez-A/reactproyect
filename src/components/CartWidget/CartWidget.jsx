import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
// No se puede poner asi fa-cart-shopping como me aparece en Font awesome porque me tira error
import "./CartWidget.css"; 
import { Link } from "react-router-dom";
import {useContext} from 'react';
import { cartContext } from "../../store/cartContext";

function CartWidget (){

    const {cantidadTotal} = useContext(cartContext)

    return(
        <Link to='/cart' className="icon-container">
           <FontAwesomeIcon icon={faCartShopping} />
            <span>{cantidadTotal()}</span>
        </Link>
    );
}

export default CartWidget;