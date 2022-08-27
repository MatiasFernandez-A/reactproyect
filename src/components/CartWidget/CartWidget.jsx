import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
// No se puede poner asi fa-cart-shopping como me aparece en Font awesome porque me tira error
import * as iconList from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css"; 
import { Link } from "react-router-dom";

function CartWidget (){
    console.log(iconList);
    return(
        <Link to='/cart' className="icon-container">
           <FontAwesomeIcon icon={faCartShopping} />
        </Link>
    );
}

export default CartWidget;