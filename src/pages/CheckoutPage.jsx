import React from 'react';
import CheckoutForm from '../components/Checkout/CheckoutForm';
import OrderSummary from '../components/Checkout/OrderSummary';

const CheckoutPage = () => {
  return (
    <div>
      <h1>Checkout Page</h1>
      <OrderSummary />
      <CheckoutForm />
    </div>
  );
};

export default CheckoutPage;