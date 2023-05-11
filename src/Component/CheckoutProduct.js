import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({
  id,
  img1,
  price,
  imageHeader,
  imageLink,
  ProjectDescription,
}) {
  const [{ basket }, dispatch] = useStateValue();
  const removefromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      price: price,
    });
  };
  return (
    <div>
      <button className="btn" onClick={removefromBasket}>
        Remove from Basket
      </button>
      <h4 className="headers">{imageHeader}</h4>

      <div className="image">
        <img src={img1} alt="" />
      </div>
      <div className="prices">
        <small>$</small>
        <strong>{price}</strong>
      </div>
      <div>
        <div className="hidden">{id}</div>
        <div className="content">
          <a href="/">{imageLink}</a>
          <p>{ProjectDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
