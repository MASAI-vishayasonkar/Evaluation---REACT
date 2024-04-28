import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/products');
    dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_PRODUCTS_FAILURE', payload: error.message });
  }
};

export const addToCart = (product) => (dispatch) => {
  dispatch({ type: 'ADD_TO_CART', payload: product });
};

export const removeFromCart = (productId) => (dispatch) => {
  dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
};

export const clearCart = () => (dispatch) => {
  dispatch({ type: 'CLEAR_CART' });
};