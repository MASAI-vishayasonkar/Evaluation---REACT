import React from 'react';
import { useSelector } from 'react-redux';

const OrderSummary = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <h2>Order Summary</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>{item.name}: ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderSummary;