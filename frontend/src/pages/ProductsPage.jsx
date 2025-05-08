import React from 'react';
import ProductList from '../components/ProductList';

const ProductsPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">All Products</h1>
      <ProductList />
    </div>
  );
};

export default ProductsPage;
