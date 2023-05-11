import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reducer, { intialState } from "./Component/reducer";
import { StateProvider } from "./Component/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51MxAOuE8WK7fqtkakSZH4sW5Q3yrlwNPquDrYGbYJVo5Bg4k94qyHZoCcMW5zPZtlxW5xDl1eJLrdnhTnqXFIthO00vghSYA5F"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Elements stripe={promise}>
        <StateProvider intialState={intialState} reducer={reducer}>
          <App />
        </StateProvider>
      </Elements>
      ;
    </BrowserRouter>
  </React.StrictMode>
);
