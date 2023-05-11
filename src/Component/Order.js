import React from "react";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";
import "./Order.css";
const Order = ({ order }) => {
  return (
    <div className="order">
      {/* <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.price}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct img1={item.img1} price={item.price} hideButton />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      /> */}

      <h1>Your Order Foud here</h1>
    </div>
  );
};

export default Order;
