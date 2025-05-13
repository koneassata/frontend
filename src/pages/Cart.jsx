// src/pages/Cart.js
import CartItem from '../components/CartItem';
import { useState } from 'react';
import PayPalButton from '../components/Paypal';

function Cart({ cartItems, removeFromCart }) {
  const [selectedMethod, setSelectedMethod] = useState('Carte');
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePayment = () => {
    alert(`Paiement de ${total.toFixed(2)} fcfa via ${selectedMethod} effectué.`);
    // Optionnel : redirection ou vider panier ici
  };

  return (
    <div className="cart">
      <h2>Votre Panier</h2>

      {cartItems.length === 0 ? (
        <p>Le panier est vide.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
            
          ))}

          <h3>Total : {total.toFixed(2)} fcfa</h3>
          <PayPalButton/>
          <div className="payment-section">
          

            {/* <h4>Choisir un mode de paiement :</h4>
            <div className="payment-methods">
             
              <label>
                <input
                  type="radio"
                  value="PayPal"
                  checked={selectedMethod === 'PayPal'}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                />
                PayPal
              </label>
             
            </div> */}

            {/* {selectedMethod === 'PayPal' ? (
              <PayPalButton total={total} />
            ) : (
              <button className="pay-btn" onClick={handlePayment}>
                Payer maintenant
              </button>
            )} */}
          </div>

        </>
      )}
    </div>
  );
}

export default Cart;
