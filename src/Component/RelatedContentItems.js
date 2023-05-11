import React from "react";

function RelatedContentItems({ id, price, img1, imageHeader, imageLink }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "Add__To__Basket",
      items: {
        img1: img1,
        imageHeader: imageHeader,
        imageLink: imageLink,
        price: price,
      },
    });
  };
  return (
    <>
      <Link onClick={addToBasket} to="/checkout">
        <div id="product-card">
          <img src={img1} alt="" />
          <div className="hidden">{id}</div>
          <div className="price-strong">
            <small>$</small>
            <strong>{price}</strong>
          </div>
        </div>
      </Link>
    </>
  );
}

export default RelatedContentItems;
