const { getCustomer } = require("../models/CustomerModel");
const { createTransaction } = require("../models/TransactionModel");

const transfer = (sourceId, destinationId, amount) => {
  let sourceAccount = getCustomer(sourceId);
  let destinationAccount = getCustomer(destinationId);
  if (!sourceAccount || !destinationAccount) {
    throw new Error("INvalid source or destination account");
  }
  if (sourceAccount.balance < amount) {
    throw new Error("Insufficient balance in the source account");
  }
  sourceAccount.balance -= amount;
  destinationAccount.balance += amount;
  console.log(sourceAccount.name + " balance is " + sourceAccount.balance);

  console.log(
    destinationAccount.name + " balance is " + destinationAccount.balance
  );
  createTransaction(
    sourceAccount.customerId,
    destinationAccount.customerId,
    amount
  );
};

module.exports = {
  transfer,
};
