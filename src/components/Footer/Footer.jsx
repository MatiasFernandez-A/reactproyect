import React from 'react'; 
import { Link } from 'react-router-dom';
import "./Footer.css"; 

function Footer() {
  return (
    <section className='footer-container'>
      <div className='footer-titulo'>
        <h2>tg</h2>
      </div>
      <ul className='footer-list'>
        <li><Link className='item-link' to="/productos">Productos</Link></li>
        <li><Link className='item-link' to="/categoria/A">Categoria A</Link></li>
        <li><Link className='item-link' to="/categoria/B">Categoria B</Link></li>
      </ul>
      <div className='footer-icons'>
        <span>
          <i className="fa-brands fa-instagram"></i>
        </span>
        <span>
          <i className="fa-brands fa-facebook-f"></i>
        </span>
      </div>
    </section>
  )
}

export default Footer