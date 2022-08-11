import "./Item.css";

function Item({ model, price, img, description }) {
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
    </div>
  );
}

export default Item;