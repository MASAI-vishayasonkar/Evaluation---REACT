import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductList from './components/Product/ProductList';
import ProductDetail from './components/Product/ProductDetail';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={ProductList} />
          <Route exact path="/products/:id" component={ProductDetail} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;