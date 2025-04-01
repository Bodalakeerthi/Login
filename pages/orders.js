import { useState, useEffect } from "react";
import { FaShoppingBag } from "react-icons/fa";
import products from "../data/products";

const Orders = () => {
  const [orders, setOrders] = useState({});

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const groupedOrders = storedOrders.reduce((acc, order) => {
      if (!acc[order.date]) {
        acc[order.date] = [];
      }
      acc[order.date].push(order);
      return acc;
    }, {});
    setOrders(groupedOrders);
  }, []);

  return (
    <div className="orders-page">
      <h2><FaShoppingBag /> Order History</h2>
      {Object.keys(orders).length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <div className="orders-list">
          {Object.entries(orders).map(([date, ordersOnDate]) => (
            <div key={date} className="order-date-group">
              <h3 className="order-date">Orders from {date}</h3>
              <div className="order-items">
                {ordersOnDate.map((order) => {
                  const product = products.find((p) => p.name.toLowerCase() === order.item.toLowerCase());
                  return (
                    <div key={order.id} className="order-card">
                      {product?.image && (
                        <img src={product.image} alt={order.item} className="order-image" />
                      )}
                      <div className="order-details">
                        <h3>{order.item}</h3>
                        <p><strong>Price:</strong> {order.price}</p>
                        <p><strong>Quantity:</strong> {order.quantity}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;