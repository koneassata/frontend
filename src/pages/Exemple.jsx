
import React, { useEffect, useState } from 'react';
import { fetchAllProducts } from '../actions/productActions';

export const Exemple = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts()
      .then(data => setProducts(data))
      .catch(err => console.error("Erreur API:", err));
      console.log(products)
  }, []);

  return (
    <div className='min-h-screen bg-black justify-center items-center'>
      <h2>Produits</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product._id} className="border p-4 rounded">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <h3>{product.name}</h3>
            <p>{product.price} €</p>
          </div>
        ))}
      </div>
    </div>
  );
};
