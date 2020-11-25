const express = require('express');
const { body, check } = require('express-validator');
const router = express.Router();
const EmployeeController = require('../controllers/EmployeeController.js');
/*
 * MIDDLEWARE
 */
router.use((req, res, next ) => {
let query = {};  

if(req.query.where)
  query.where = JSON.parse(req.query.where);

if(req.query.fields)
  query.fields = JSON.parse(req.query.fields);

if(req.query.sort)
  query.sort = {sort : JSON.parse(req.query.sort)};
else
  query.sort = {};

if(req.query.limit)
  query.sort.limit = parseInt(req.query.limit);

if(req.query.skip)
  query.sort.skip = parseInt(req.query.skip);

req.query = query;

next();
})

/*
 * GET
 */
router.get('/', (req, res) => {
  EmployeeController.list(req, res);
});

/*
 * GET
 */
router.get('/:id', (req, res) => {
  EmployeeController.show(req, res);
});

/*
 * POST
 */
router.post('/',[
  body('email', 'Provide valid email').isEmail(),
  body('email', 'Email is required').exists(),
  body('firstName', 'First Name is required').exists(),
  body('lastName', 'Last Name is required').exists(),
  body('phone', 'Phone is required').exists(),
  body('dob', 'Date of Birth is required').exists(),
  body('gender', 'gender is required').exists(),
] , (req, res) => {
  EmployeeController.create(req, res);
});

/*
 * PUT
 */
router.put('/:id', [
  body('email', 'Provide valid email').isEmail(),
], (req, res) => {
  EmployeeController.update(req, res);
});

/*
 * DELETE
 */
router.delete('/:id', (req, res) => {
  EmployeeController.remove(req, res);
});

module.exports = router;
