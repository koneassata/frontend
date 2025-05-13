function CartItem({ item, removeFromCart }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <p>Prix unitaire: {item.price} fcfa</p>
        <p>Quantité: {item.quantity}</p>
        <p>Total: {(item.price * item.quantity).toFixed(2)} fcfa</p>
        <button onClick={() => removeFromCart(item.id)}>Supprimer</button>
      </div>
    </div>
  );
}

export default CartItem