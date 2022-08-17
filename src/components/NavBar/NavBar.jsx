import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"; 
import { Link } from "react-router-dom";

function NavBar () {
    return (
        <header>
            <nav>
                <div className="title_container">
                    <h1 className="title"><a href="#">TG</a></h1>    
                </div>
                <ul className="list">
                    <li><Link to="/" className="ancore_list">Inicio</Link></li>
                    <li><Link to="/nosotros" className="ancore_list">Nosotros</Link></li>
                    <li><Link to="/productos" className="ancore_list">Productos</Link></li>
                    <li><Link to="/contacto" className="ancore_list">Contacto</Link></li>
                    <li><Link to="/categoria/A" className="ancore_list">Categoria A </Link></li>
                    <li><Link to="/categoria/B" className="ancore_list">Categoria B</Link></li>
                    <CartWidget/>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar; 

