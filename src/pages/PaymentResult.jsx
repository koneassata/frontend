// src/pages/PaymentResult.js
import { useLocation } from 'react-router-dom';

function PaymentResult() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const success = searchParams.get('success') === 'true';

  return (
    <div className="payment-result">
      {success ? (
        <h2>Paiement réussi ✅</h2>
      ) : (
        <h2>Échec du paiement ❌</h2>
      )}
    </div>
  );
}

export default PaymentResult;
