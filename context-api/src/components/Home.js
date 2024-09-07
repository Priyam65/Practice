import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import ProductPage from "./ProductPage";
import "./styles.css";
const Home = () => {
  const productsArray = [...Array(40)].map(() => ({
    id: faker.string.uuid(),
    name: faker.internet.userName(),
    price: faker.internet.email(),
    image: faker.image.avatar(),
  }));

  const products = useState(productsArray);

  return (
    <div className="productContainer">
      {products.map((product) => (
        <ProductPage key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
