const mongoose = require("mongoose");
const express = require("express");
//which api is called (means LOGS )
const morgan = require("morgan");
// TO Parse the data in& out
const bodyParser = require("body-parser");

const EmployeeRouter = require('./routes/Emp')
//default port on mongodb is running : 27017

mongoose.connect(
  "mongodb+srv://vishesh:Ace%40123@testtry1.x68sj4z.mongodb.net/",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;

db.on("error", (err) => {
  console.log("error =====>", err);
});

db.once("open", () => {
  console.log("DB Connection ESTABLISHED ! ");
});

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}` )
});
