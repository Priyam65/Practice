import React from "react";
import "./styles.css";

const ProductPage = ({ product }) => {
  return (
    <div className="products">
      <img scr={product.image} alt={product.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{product.name}</span>
        <span>{product.price}</span>
      </div>
      <button className="add">Add to Cart</button>
    </div>
  );
};

export default ProductPage;
