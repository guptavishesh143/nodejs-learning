const express = require("express");
const router = express.Router();

const EmployeeController = require('../controllers/Emp');

router.get('/',EmployeeController.index);
router.post('/show',EmployeeController.show);
router.post('/store',EmployeeController.store);
router.put('/update',EmployeeController.update);
router.delete('/delete',EmployeeController.Destroy);

module.exports = router