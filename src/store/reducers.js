import { combineReducers } from 'redux';

const initialState = {
  products: {
    items: [],
    loading: false,
    error: null,
  },
  cart: {
    items: [],
  },
  auth: {
    isAuthenticated: false, 
    user: null, 
    loading: false,
    error: null,
  },
  checkout: {
   
    shippingAddress: '', 
    paymentMethod: '', 
    loading: false,
    error: null,
  },
};

const productReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_PRODUCTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    
    default:
      return state;
  }
};

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

const checkoutReducer = (state = initialState.checkout, action) => {
  switch (action.type) {
    case 'INITIATE_CHECKOUT':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'SET_SHIPPING_ADDRESS':
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case 'SET_PAYMENT_METHOD':
      return {
        ...state,
        paymentMethod: action.payload,
      };
    case 'SUBMIT_ORDER_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
      };
    case 'SUBMIT_ORDER_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  auth: authReducer,
  checkout: checkoutReducer,
});

export default rootReducer;