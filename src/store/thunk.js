import { loginSuccess, loginFailure } from './actions'; 

export const loginThunk = (credentials) => async (dispatch) => {
  try {
    
    const response = await fetch('https://example.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      const userData = await response.json();

      dispatch(loginSuccess(userData));
    } else {
      
      dispatch(loginFailure('Invalid username or password'));
    }
  } catch (error) {
    
    console.error('Error logging in:', error);
    dispatch(loginFailure('An error occurred while logging in. Please try again later.'));
  }
};