import React from "react";
import "./RealetedContentView.css";
import ProductCard from "./ProductCard";

function RealetedContentView() {
  return (
    <div>
      <section class="section-2">
        <div class="section-2-container">
          <h3>Related to items you've viewed</h3>
          <div class="product-cards">
            <ProductCard
              img1="https://m.media-amazon.com/images/I/61Y30DpqRVL._AC_SY400_.jpg"
              price={1000}
            />
            <ProductCard
              img1="https://m.media-amazon.com/images/I/61LNnZPoKPS._AC_SY400_.jpg"
              price={1200}
            />
            <ProductCard
              img1="https://m.media-amazon.com/images/I/71iiXU7HHkL._AC_SY400_.jpg"
              price={1388}
            />
            <ProductCard
              img1="https://m.media-amazon.com/images/I/61XZQXFQeVL._AC_SY400_.jpg"
              price={1938}
            />
            <ProductCard
              img1="https://m.media-amazon.com/images/I/712B4P3yOnL._AC_SY400_.jpg"
              price={1522}
            />
            <ProductCard
              img1="https://m.media-amazon.com/images/I/51eTOVYRbTL._AC_SY400_.jpg"
              price={1522}
            />
          </div>
        </div>
      </section>
      <section class="section-2">
        <div class="section-2-container">
          <h3>Best Sellers in Grocery & Gourmet Foods</h3>
          <div class="product-cards">
            <ProductCard
              img1="https://m.media-amazon.com/images/I/617tvTiZLGL._AC_SY400_.jpg"
              price={1030}
            />
            <ProductCard
              img1="https://m.media-amazon.com/images/I/51tNket0w8L._AC_SY400_.jpg"
              price={1290}
            />
            <ProductCard
              img1="https://m.media-amazon.com/images/I/91oNY+gNzPL._AC_SY400_.jpg"
              price={1358}
            />
            <ProductCard
              img1="https://m.media-amazon.com/images/I/81t6ws1HsWL._AC_SY200_.jpg"
              price={1738}
            />
            <ProductCard
              img1="https://m.media-amazon.com/images/I/719eDVmYeYL._AC_SY200_.jpg"
              price={1922}
            />
            <ProductCard
              img1="https://m.media-amazon.com/images/I/61PYUdXPguL._AC_SY200_.jpg"
              price={9722}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default RealetedContentView;
