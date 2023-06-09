import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt="checkout banner"
          />
          <h4>
            Hello, <br />
            Your Shopping Basket
          </h4>
        </div>

        <Subtotal />
      </div>
      <div className="CheckoutProduct">
        {basket.map((item) => (
          <CheckoutProduct
            imageHeader={item.imageHeader}
            img1={item.img1}
            price={item.price}
            ProjectDescription={item.ProjectDescription}
          />
        ))}
      </div>
    </>
  );
}

export default Checkout;
