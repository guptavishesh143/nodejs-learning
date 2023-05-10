const Employee = require("../models/Emp");

//show list of Employees
const index = (req, res, next) => {
  Employee.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((err) => {
      res.json({
        message: "An Error Occured ",
      });
    });
};

//SHOW EMP BY EMP_ID
const show = (req, res, next) => {
  let employeeId = req.body.employeeId;
  Employee.findById(employeeId)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((err) => {
      res.json({
        message: "An Error Occured ",
      });
    });
};

//ADD EMP TO DB
const store = (res, req, next) => {
  let employee = new Employee({
    name: req.body.name,
    designation: req.body.designation,
    email: req.body.email,
    phoneNo: req.body.phone,
    age: req.body.age,
  });
  employee
    .save()
    .then((response) => {
      res.json({
        message: "Employee Added Successfully !",
      });
    })
    .catch((err) => {
      res.json({
        message: "An Error Occured ",
      });
    });
};

//UPDATE EMP BY EMP_ID
const update = (req, res, next) => {
  let employeeId = req.body.employeeId;
  let updateData = {
    name: req.body.name,
    designation: req.body.designation,
    email: req.body.email,
    phoneNo: req.body.phone,
    age: req.body.age,
  };

  Employee.findByIdAndUpdate(employeeId, { $set: updateData })
    .then(() => {
      res.json({
        message: "Employee updated Successfully!",
      });
    })
    .catch((err) => {
      res.json({
        message: "An Error Occured ",
      });
    });
};

//DELETE EMP BY EMP_ID

const Destroy = (req, res, next) => {
  let employeeId = req.body.employeeId;

  Employee.findByIdAndDelete(employeeId)
    .then(() => {
      req.json({
        message: "Employee Deleted Succesfully!",
      });
    })
    .catch((err) => {
      res.json({
        message: "An Error Occured ",
      });
    });
};

module.exports = {
  index,
  show,
  update,
  Destroy,
  store,
};
