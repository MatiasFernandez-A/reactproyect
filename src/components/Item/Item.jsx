import "./Item.css";
import { Link } from "react-router-dom";

function Item({ id, model, price, img, description }) {

  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="imagen" />
      </div>
      <div className="card-detail">
        <h2>{model}</h2>
        <p>{description}</p>
        <h3>$ {price}</h3>
      </div>
      <div className="card-button">
        <Link to={`/detalle/${id}`}>Ver mas</Link> 
      </div>
    </div>
  );
}

export default Item;

/* Link => tengo que llamar al to asi porque las `` no existen en html, por eso las encierro en llaves */