const PORT = 3000;
const express = require("express");
const app = express();
const router = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log("Server running at " + `http://localhost:$PORT`);
});
