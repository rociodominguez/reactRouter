import React from 'react';
import './Products.css'

const products = [
  { id: 1, name: 'Product 1', description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', description: 'Description for Product 2' },
  { id: 3, name: 'Product 3', description: 'Description for Product 3' }
];

const Products = () => (
  <div className="products">
    <h1>Products Page</h1>
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Products;