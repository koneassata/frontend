import { Link } from 'react-router-dom';

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price} fcfa</p>
      <div className="buttons">
        <Link to={`/product/${product.id}`}>
          <button>Voir</button>
        </Link>
        <button onClick={() => addToCart(product)}>Ajouter au panier</button>
      </div>
    </div>
  );
}

export default ProductCard;
