import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/actions';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div>
      <p>{item.name}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Price: ${item.price}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;