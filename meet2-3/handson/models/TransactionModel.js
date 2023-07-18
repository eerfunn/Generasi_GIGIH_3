let transactions = [
  {
    transactionId: "123456789",
    sourceId: "12345",
    destinationId: "67890",
    amount: 5.0,
    timestamp: "2023-06-01T00:00:00.000Z",
  },
];

const createTransaction = (sourceId, destinationId, amount) => {
  const transaction = {
    transactionId: generateTransactionId(),
    sourceId,
    destinationId,
    amount,
    timestamp: new Date().toISOString(),
  };
  transactions.push(transaction);
  return transaction;
};

const generateTransactionId = () => {
  return Math.random().toString(36).substr(2, 9);
};
module.exports = {
  createTransaction,
};
