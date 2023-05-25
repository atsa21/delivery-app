const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const shopsRoutes = require("./routes/shops");
const ordersRoutes = require("./routes/orders");

const app = express();

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://ts21ann:" + process.env.MONGO_ATLAS_PW + "@skillhub.qr25lpk.mongodb.net/delivery-app")
.then(() => {
    console.log("Connected database!");
})
.catch(() => {
    console.log("Connection failed!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", express.static(path.join(__dirname, "angular")));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.use("/api/shops", shopsRoutes);
app.use("/api/orders", ordersRoutes);
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "angular", "index.html"));
});

module.exports = app;