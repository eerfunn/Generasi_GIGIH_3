const express = require("express");
const app = express();
const router = require("./controllers/TransactionController");
const port = 3000;

app.use(express.json());
app.use("/api/v1", router);
app.listen(port, () => {
  console.log(`Express running at http://localhost:${port}`);
});
