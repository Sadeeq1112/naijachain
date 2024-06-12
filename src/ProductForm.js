import React, { useState } from 'react';
import { createTransaction, signAndSendTransaction } from './Algorand';

function ProductForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const txn = await createTransaction(/* TODO: Add transaction details here */);
    const { txId, response } = await signAndSendTransaction(txn, /* TODO: Add private key here */);
    setMessage(`Transaction successful: ${txId}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
      {message && <p>{message}</p>}
    </form>
  );
}

export default ProductForm;