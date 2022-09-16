import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"; 
import { Link } from "react-router-dom";
import { cartContext } from "../../store/cartContext";
import { useContext } from "react";

function NavBar () {

    let {cart} = useContext(cartContext)


    return (
        <header>
            <div className="oferta-container">
                <p>12 Cuotas sin interes</p>
            </div>
            <nav>
                <div className="title_container">
                    <h1 className="title"><Link to="/">Tg</Link></h1>    
                </div>
                <ul className="list">
                    <li><Link to="/" className="ancore_list">Inicio</Link></li>
                    <li><Link to="/nosotros" className="ancore_list">Nosotros</Link></li>
                    <li><Link to="/productos" className="ancore_list">Productos</Link></li>
                    <li><Link to="/contacto" className="ancore_list">Contacto</Link></li>
                    <li><Link to="/categoria/A" className="ancore_list">Categoria A </Link></li>
                    <li><Link to="/categoria/B" className="ancore_list">Categoria B</Link></li>
                    {
                        cart.length === 0 ?
                        <div></div>
                        :
                        <CartWidget/>
                    }
                </ul>
            </nav>
        </header>
    )
}
export default NavBar; 

