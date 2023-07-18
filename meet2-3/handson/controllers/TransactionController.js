const express = require("express");

const router = express.Router();
const { transfer } = require("../services/TransactionService");

router.post("/transactions", (req, res) => {
  try {
    const { sourceAccount, destinationAccount, amount } = req.body;
    if (!sourceAccount || !destinationAccount || !amount) {
      throw new Error("Insufficient Parameter");
    }
    transfer(sourceAccount, destinationAccount, amount);
    console.log(transfer);
    res
      .status(201)
      .json({ message: "Transaction created successfully!", data: transfer });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
