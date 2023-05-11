import React, { useEffect } from "react";
import "./App.css";
import Header from "./Component/Header";

import Footer from "./Component/Footer";

import { Route, Routes } from "react-router-dom";
import ContentCollection from "./Component/ContentCollection";
import Checkout from "./Component/Checkout";
import Login from "./Component/Login";
import { useStateValue } from "./Component/StateProvider";
import { auth } from "./Component/firebase";
import Order from "./Component/Order";
import FourFour from "./Component/FourFour";
import Payment from "./Component/Payement";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/payement" element={<Payment />} />

        <Route path="/" element={<ContentCollection />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Orders" element={<Order />} />
        <Route path="*" element={<FourFour />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
