const express = require("express");
const router = require("./routes");
const app = express();
const port = 3000;

app.use("/api/v1", router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
