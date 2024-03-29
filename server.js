const mongoose = require("mongoose");
const express = require("express");
//which api is called (means LOGS )
const morgan = require("morgan");
// TO Parse the data in & out
const bodyParser = require("body-parser");

//ROUTERS 
const EmployeeRouter = require('./routes/Emp')
//default port on mongodb is running : 27017

mongoose.connect('mongodb+srv://learn:learn@employee.zl5moa0.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.log('DB Connection error =====>', err);
});

db.once("open", () => {
  console.log("DB Connection ESTABLISHED ! ");
});

const app = express();
// app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




//For employee Route
app.use('/api/employee',EmployeeRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}` )
});