const employee = require('../models/Emp');

//show list of Employees
const index = (req, res, next) => {
  employee
    .find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((err) => {
      res.json({
        message: 'An Error Occured ',
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
    const data = await employee.findById(employeeId);
    if (!data) {
      res.status(400).send({
        message: 'Data Not found!',
        data: data,
      });
    }
    res.status(200).send({
      message: 'Data found!',
      data: data,
    });
  } catch (error) {
    res.send({
      message: 'Data Not found!',
      data: data,
    });
  }
};

//OLD FORMAT
// //ADD EMP TO DB
// const store = (req, res) => {
//   console.log("req===>", req.body);
//   let employee = new employee({
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
//         message: "employee Added Successfully !",
//       });
//     })
//     .catch((err) => {
//       res.json({
//         message: "An Error Occured ",
//       });
//     });
// };

//NEW FORMAT
const add = async (req, res) => {
  try {
    const { name, designation, email, phoneNo, age } = req.body;

    // let a = Object.keys(req.body);
    // console.log('====================================');
    // console.log('a==========>', a);
    // console.log('====================================');
    // res.status(200).send({
    //   message: 'employee Added Successfully !',
    //   //  data: data,
    // });
    //VALIDATION FOR NAME
    // if (!name || !name.trim()) {
    //   return res.json({
    //     message: 'employee Name not found  !',
    //   });
    // }
    const data = await employee.create(req.body);
    res.status(200).send({
      message: 'employee Added Successfully !',
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

  const data = await employee.findByIdAndUpdate(employeeId, {
    $set: updateData,
  });

  try {
  } catch (error) {}
  // .then(() => {
  //   res.json({
  //     message: "employee updated Successfully!",
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

  employee
    .findByIdAndDelete(employeeId)
    .then(() => {
      req.json({
        message: 'employee Deleted Succesfully!',
      });
    })
    .catch((err) => {
      res.json({
        message: 'An Error Occured ',
      });
    });
};

module.exports = {
  index,
  show,
  update,
  Destroy,
  add,
};
