import products from "../data/products";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const Cart = ({ cart, setCart }) => {
  const handleAdd = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleRemove = (id) => {
    setCart((prev) => {
      if (!prev[id] || prev[id] <= 1) return prev;
      return { ...prev, [id]: prev[id] - 1 };
    });
  };

  const handleRemoveAll = (id) => {
    setCart((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const handleCheckout = () => {
    if (Object.keys(cart).length === 0) return alert("Cart is empty!");

    const newOrder = Object.entries(cart).map(([id, quantity]) => {
      const product = products.find((p) => p.id === parseInt(id));
      return {
        id: Date.now(),
        item: product?.name,
        date: new Date().toLocaleDateString(),
        price: `₹${(product?.price * quantity).toFixed(2)}`,
        quantity,
      };
    });

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...existingOrders, ...newOrder]));
    setCart({});
    alert("Order placed successfully!");
  };

  const totalPrice = Object.entries(cart).reduce((total, [id, quantity]) => {
    const product = products.find((p) => p.id === parseInt(id));
    return total + (product?.price || 0) * quantity;
  }, 0);

  return (
    <>
    <div className="cart-page">
      <h2 className="cart-title">Your Cart</h2>
      {Object.keys(cart).length === 0 ? (
        <p className="empty-cart">Your cart is empty. Add some items!</p>
      ) : (
        <div className="cart-items">
          {Object.entries(cart).map(([id, quantity]) => {
            const product = products.find((p) => p.id === parseInt(id));
            const itemTotal = (product?.price || 0) * quantity;
            return (
              <div key={id} className="cart-item">
                <img src={product?.image} alt={product?.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{product?.name}</h3>
                  <p>₹{product?.price}</p>
                  <div className="quantity-selector">
                    <button onClick={() => handleRemove(id)} className="quantity-btn"><FaMinus /></button>
                    <span>{quantity}</span>
                    <button onClick={() => handleAdd(id)} className="quantity-btn"><FaPlus /></button>
                  </div>
                  <p className="item-total">Total: ₹{itemTotal.toFixed(2)}</p>
                  <button onClick={() => handleRemoveAll(id)} className="remove-btn"><FaTrash /> Remove</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {Object.keys(cart).length > 0 && (
        <div className="cart-footer">
          <h3>Total Amount: ₹{totalPrice.toFixed(2)}</h3>
          <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
        </div>
      )}
    </div>
    </>
  );
};

export default Cart;
