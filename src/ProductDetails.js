import React, { useState } from 'react';
import { createTransaction, signAndSendTransaction } from './Algorand';

function ProductDetails({ product }) {
  const [message, setMessage] = useState('');

  const handleBuyNow = async () => {
    const txn = await createTransaction(/* TODO: Add transaction details here */);
    const { txId, response } = await signAndSendTransaction(txn, /* TODO: Add private key here */);
    setMessage(`Transaction successful: ${txId}`);
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={handleBuyNow}>Buy Now</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ProductDetails;