import { useState } from 'react';
import products from './product';

function Home({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const categories = ['Tous', ...new Set(products.map(p => p.category))];

  const filteredProducts = selectedCategory === 'Tous'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="home">
     
      <h2>HOMEMARKET !</h2>
      <p>Découvrez nos produits exclusifs et profitez de nos offres spéciales.</p>
      <div className="categories">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? 'active' : ''}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-container">
        {filteredProducts.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price} fcfa</p>
            <button onClick={() => addToCart(product)}>Ajouter au panier</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
