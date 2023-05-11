import React from "react";
import { useStateValue } from "./StateProvider";
import "./Content.css";
import { Link } from "react-router-dom";

function Content({
  id,
  price,
  img1,
  imageHeader,
  imageLink,
  ProjectDescription,
}) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "Add__To__Basket",
      items: {
        img1: img1,
        imageHeader: imageHeader,
        imageLink: imageLink,
        price: price,
        ProjectDescription: ProjectDescription,
      },
    });
  };
  return (
    <div className="content">
      <h4>{imageHeader}</h4>
      <Link onClick={addToBasket} to="/checkout">
        <div className="hidden">{id}</div>
        <div className="price-strong">
          <small>$</small>
          <strong>{price}</strong>
        </div>

        <img src={img1} alt="" />
        <p className="price-strong">{ProjectDescription}</p>
        <a href="/">{imageLink}</a>
      </Link>
    </div>
  );
}

export default Content;
