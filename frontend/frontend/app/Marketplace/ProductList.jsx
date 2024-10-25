import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Laptop', price: '$500' },
    { id: 2, name: 'Smartphone', price: '$300' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  );
};

export default ProductList;
