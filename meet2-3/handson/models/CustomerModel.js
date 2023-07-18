let customers = [
  {
    customerId: "12345",
    name: "John Doe",
    email: "johndoe@example.com",
    balance: 5000.0,
  },
  {
    customerId: "00001",
    name: "Alice",
    email: "johndoe@example.com",
    balance: 5000.0,
  },
];
const getAllCustomers = () => {
  return customers;
};
const getCustomer = (customerId) => {
  return customers.find((c) => c.customerId === customerId);
};
const createCustomer = (name, email, initialBalance) => {
  let newCustomer = {
    customerId: generateCustomerId(),
    name: name,
    email: email,
    balance: initialBalance,
  };
  return newCustomer;
};
const generateCustomerId = () => {
  return Math.random().toString(10).substr(2, 6);
};

module.exports = {
  getAllCustomers,
  getCustomer,
  createCustomer,
};
