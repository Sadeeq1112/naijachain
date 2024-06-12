import React, { useState, useEffect } from 'react';
import algosdk from 'algosdk';
import { fetchTransactions } from './Algorand';

function ProductListing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const transactions = await fetchTransactions('YOUR-ALGORAND-ADDRESS-HERE');
      const products = transactions.map(txn => algosdk.decodeObj(txn.note));
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;