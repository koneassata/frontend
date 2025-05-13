// actions/paymentActions.js

export const CREATE_PAYMENT_REQUEST = 'CREATE_PAYMENT_REQUEST';
export const CREATE_PAYMENT_SUCCESS = 'CREATE_PAYMENT_SUCCESS';
export const CREATE_PAYMENT_FAILURE = 'CREATE_PAYMENT_FAILURE';
export const CAPTURE_PAYMENT_SUCCESS = 'CAPTURE_PAYMENT_SUCCESS';
export const CAPTURE_PAYMENT_FAILURE = 'CAPTURE_PAYMENT_FAILURE';

export const createPayment = (amount) => async (dispatch) => {
  dispatch({ type: CREATE_PAYMENT_REQUEST });

  try {
    const response = await fetch('http://localhost:5000/create-payment', {
      method: 'POST',
      body: JSON.stringify({ amount }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    dispatch({ type: CREATE_PAYMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_PAYMENT_FAILURE, payload: error.message });
  }
};

export const capturePayment = (orderID) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:5000/capture-payment', {
      method: 'POST',
      body: JSON.stringify({ orderID }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    dispatch({ type: CAPTURE_PAYMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CAPTURE_PAYMENT_FAILURE, payload: error.message });
  }
};
