import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PrendaContext } from "../context/prendas";
import { CartContext } from "../context/cart";

const PrendaDetails = () => {
  const { id } = useParams();
  const history = useNavigate();
  const { prendas } = useContext(PrendaContext);
  const { addToCart } = useContext(CartContext);

  const prenda = prendas.find((prenda) => {
    return prenda.id === id;
  });
  if (!prenda) {
    return <h3>Loading...</h3>;
  }

  const { image: url, name, description, categoria, price } = prenda;

  return (
    <section className="book-details">
      <div className="detail-image">
        <img src={url} alt="10x Rule" />
      </div>
      <div className="detail-description">
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>{categoria}</h3>
        <h4>Price - $ {price}</h4>
        <button
          className="btn"
          onClick={() => {
            addToCart({ ...prenda, id });
            history.push("/cart");
          }}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default PrendaDetails;
