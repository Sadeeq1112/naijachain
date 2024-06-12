import algosdk from 'algosdk';

const algodClient = new algosdk.Algodv2(/* TODO: Add your Algorand node details here */);

export async function fetchTransactions(address) {
    const response = await algodClient.accountInformation(address).do();
    const transactions = response.transactions;
    return transactions;
  }

export async function signAndSendTransaction(txn, privateKey) {
    const signedTxn = algosdk.signTransaction(txn, privateKey);
    const txId = signedTxn.txID;
    const response = await algodClient.sendRawTransaction(signedTxn.blob).do();
    return { txId, response };
  }

export async function createTransaction(sender, receiver, amount, note) {
  const params = await algodClient.getTransactionParams().do();
  const txn = {
    "from": sender,
    "to": receiver,
    "fee": params.fee,
    "amount": amount,
    "firstRound": params.firstRound,
    "lastRound": params.lastRound,
    "genesisID": params.genesisID,
    "genesisHash": params.genesishashb64,
    "note": algosdk.encodeObj(note),
  };
  
  

  return txn;
}