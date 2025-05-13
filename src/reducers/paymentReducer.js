// reducers/paymentReducer.js

import {
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
  CREATE_PAYMENT_FAILURE,
  CAPTURE_PAYMENT_SUCCESS,
  CAPTURE_PAYMENT_FAILURE,
} from '../actions/paymentActions';

const initialState = {
  payment: null,
  loading: false,
  error: null,
  captureResult: null,
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PAYMENT_REQUEST:
      return { ...state, loading: true, error: null };
    case CREATE_PAYMENT_SUCCESS:
      return { ...state, loading: false, payment: action.payload };
    case CREATE_PAYMENT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case CAPTURE_PAYMENT_SUCCESS:
      return { ...state, captureResult: action.payload };
    case CAPTURE_PAYMENT_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default paymentReducer;
