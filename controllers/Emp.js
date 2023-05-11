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
const show = async (req, res) => {
  try {
    let { employeeId } = req.body;
    if (!employeeId && !employeeId.trim()) {
      return res.status.send({
        response,
      });
    }
    const data = await Employee.findById(employeeId);
    if (!data) {
      res.status(400).send({
        message: "Data Not found!",
        data: data,
      });
    }
    res.status(200).send({
      message: "Data found!",
      data: data,
    });
  } catch (error) {
    res.send({
      message: "Data Not found!",
      data: data,
    });
  }
};

//OLD FORMAT
// //ADD EMP TO DB
// const store = (req, res) => {
//   console.log("req===>", req.body);
//   let employee = new Employee({
//     name: req.body.name,
//     designation: req.body.designation,
//     email: req.body.email,
//     phoneNo: req.body.phone,
//     age: req.body.age,
//   });
//   employee
//     .create(employee)
//     .then((response) => {
//       res.json({
//         message: "Employee Added Successfully !",
//       });
//     })
//     .catch((err) => {
//       res.json({
//         message: "An Error Occured ",
//       });
//     });
// };

//NEW FORMAT
const store = async (req, res) => {
  try {
    const { name, designation, email, phoneNo, age } = req.body;
    //VALIDATION FOR NAME
    if (!name || !name.trim()) {
      return res.json({
        message: "Employee Name not found  !",
      });
    }
    const data = await Employee.create(req.body);
    res.status(200).send({
      message: "Employee Added Successfully !",
      data: data,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

//UPDATE EMP BY EMP_ID
const update = async (req, res) => {
  let { employeeId } = req.body;
  let updateData = {
    name: req.body.name,
    designation: req.body.designation,
    email: req.body.email,
    phoneNo: req.body.phone,
    age: req.body.age,
  };

  const data = await Employee.findByIdAndUpdate(employeeId, {
    $set: updateData,
  });
  // .then(() => {
  //   res.json({
  //     message: "Employee updated Successfully!",
  //   });
  // })
  // .catch((err) => {
  //   res.json({
  //     message: "An Error Occured ",
  //   });
  // });
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
