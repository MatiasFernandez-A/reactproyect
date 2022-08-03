import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
// No se puede poner asi fa-cart-shopping como me aparece en Font awesome porque me tira error
import * as iconList from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css"; 

function CartWidget (){
    console.log(iconList);
    return(
        <div className="icon-container">
           <FontAwesomeIcon icon={faCartShopping} />
        </div>
    );
}

export default CartWidget;