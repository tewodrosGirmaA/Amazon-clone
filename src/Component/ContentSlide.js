import Book1 from "../Image/shopingImage/Book1.jpg";
import Book2 from "../Image/shopingImage/Book2.jpg";
import Book3 from "../Image/shopingImage/Book3.jpg";
import Book4 from "../Image/shopingImage/Book4.jpg";
import Book5 from "../Image/shopingImage/Book5.jpg";
import Book6 from "../Image/shopingImage/Book6.jpg";
import Book7 from "../Image/shopingImage/Book7.jpg";
import Book8 from "../Image/shopingImage/Book8.jpg";

import Book10 from "../Image/shopingImage/Book10.jpg";
import Book11 from "../Image/shopingImage/Book11.jpg";
import Book12 from "../Image/shopingImage/Book12.jpg";
import Book13 from "../Image/shopingImage/Book13.jpg";
import Book14 from "../Image/shopingImage/Book14.jpg";
import Book15 from "../Image/shopingImage/Book15.jpg";
import Book16 from "../Image/shopingImage/Book16.jpg";
import Book17 from "../Image/shopingImage/Book17.jpg";
import Book18 from "../Image/shopingImage/Book18.jpg";
import "./ContentSlide.css";
import ProductCard from "./ProductCard";

function ContentSlide() {
  return (
    <div>
      <section class="section-2">
        <div class="section-2-container">
          <div class="product-cards">
            <ProductCard img1={Book1} price={100} />
            <ProductCard img1={Book2} price={100} />
            <ProductCard img1={Book3} price={100} />
            <ProductCard img1={Book4} price={100} />
            <ProductCard img1={Book5} price={100} />
            <ProductCard img1={Book6} price={100} />
            <ProductCard img1={Book7} price={100} />
            <ProductCard img1={Book8} price={100} />
            <ProductCard img1={Book10} price={100} />
            <ProductCard img1={Book11} price={100} />
            <ProductCard img1={Book12} price={100} />
            <ProductCard img1={Book13} price={100} />
            <ProductCard img1={Book14} price={100} />
            <ProductCard img1={Book15} price={100} />
            <ProductCard img1={Book16} price={100} />
            <ProductCard img1={Book17} price={100} />
            <ProductCard img1={Book18} price={100} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContentSlide;
