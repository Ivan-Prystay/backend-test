const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const cfkProducts = require("./routes/api/cfkProducts");
const etcProducts = require("./routes/api/etcProducts");
const mcDonnyProducts = require("./routes/api/mcDonnyProducts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/cfkProducts", cfkProducts);
app.use("/api/etcProducts", etcProducts);
app.use("/api/mcDonnyProducts", mcDonnyProducts);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
