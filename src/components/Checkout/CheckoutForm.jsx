import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../store/actions';

const CheckoutForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.elements.name.value,
      address: e.target.elements.address.value,
      
    };

    try {
      
      await axios.post('https://example.com/api/orders', formData);

      
      dispatch(clearCart());

      alert('Order submitted successfully! Thank you for your purchase.');
    } catch (error) {
      
      console.error('Error submitting order:', error);
      alert('An error occurred while submitting your order. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="text" name="address" placeholder="Address" required />
      <button type="submit">Submit Order</button>
    </form>
  );
};

export default CheckoutForm;