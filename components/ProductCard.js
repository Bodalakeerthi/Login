import React from "react";

const ProductCard = ({ product, cart = {}, setCart }) => {
  const handleAdd = () => setCart((prev) => ({ ...prev, [product.id]: (prev?.[product.id] || 0) + 1 }));

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={handleAdd} className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
