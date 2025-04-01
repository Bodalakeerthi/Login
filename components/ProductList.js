import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

const ProductList = ({ category, searchQuery, cart, setCart }) => {
  const filteredProducts = products.filter(
    (product) =>
      (!category || product.category === category) &&
      product.name.toLowerCase().includes((searchQuery || "").toLowerCase())
  );

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
};

export default ProductList;
