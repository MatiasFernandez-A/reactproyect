import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"; 

function NavBar () {
    return (
        <header>
            <nav>
                <div className="title_container">
                    <h1 className="title"><a href="#">Todo maderas</a></h1>    
                </div>
                <ul className="list">
                    <li><a href="#" className="ancore_list">Inicio</a></li>
                    <li><a href="#" className="ancore_list">nosotros</a></li>
                    <li><a href="#" className="ancore_list">Productos</a></li>
                    <li><a href="#" className="ancore_list">Contactos</a></li>
                    <CartWidget/>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar; 