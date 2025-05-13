// src/components/PaymentForm.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPaymentMethod } from '../actions/paymentActions';

const PaymentForm = () => {
  const dispatch = useDispatch();
  const paymentMethod = useSelector((state) => state.payment.paymentMethod);
  
  const [method, setMethod] = useState(paymentMethod || ''); // Si aucun mode de paiement n'est sélectionné, on met un string vide

  const handleChange = (e) => {
    setMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setPaymentMethod(method)); // Met à jour l'état du mode de paiement
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Choisissez votre mode de paiement :
          <select value={method} onChange={handleChange}>
            <option value="">Sélectionner</option>
            <option value="credit-card">Carte de crédit</option>
            <option value="paypal">PayPal</option>
          </select>
        </label>
      </div>
      <button type="submit">Confirmer</button>

      {paymentMethod && <p>Mode de paiement sélectionné : {paymentMethod}</p>}
    </form>
  );
};

export default PaymentForm;
