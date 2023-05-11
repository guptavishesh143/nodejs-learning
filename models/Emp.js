const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: {
    type: String,
  },
  designation: {
    type: String,
  },
  email: {
    type: String,
    unique: true, // no duplicate values
    required: true,
    default: 'STRING' // ANY DEFAULT VALUE 
  },
  phone: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
