import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  return (
    <div className="checkout__title">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <h4>
              Subtotal({basket.length}items):<strong>{value}</strong>
            </h4>
            <small>
              <input type="checkbox" /> This Order Conatin a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Link to="/payement">
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
}

export default Subtotal;
