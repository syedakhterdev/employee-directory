const { validationResult } = require('express-validator');
const EmployeeModel = require('../models/EmployeeModel.js');

/**
 * EmployeeController.js
 *
 * @description :: Server-side logic for managing Employees.
 */
module.exports = {

  /**
   * EmployeeController.list()
   */
  list: (req, res) => {
    EmployeeModel.find(req.query.where, req.query.fields, req.query.sort, (err, Employees) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Employee.',
          error: err
        });
      }
      return res.json(Employees);
    });
  },

  /**
   * EmployeeController.show()
   */
  show: (req, res) => {
    let id = req.params.id;
    EmployeeModel.findOne({_id: id}, (err, Employee) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Employee.',
          error: err
        });
      }
      if (!Employee) {
        return res.status(404).json({
          message: 'No such Employee'
        });
      }
      return res.json(Employee);
    });
  },

  /**
   * EmployeeController.create()
   */
  create: (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(422).json({ message: "Invalid employee properties" })
    }
    let Employee = new EmployeeModel({
			firstName : req.body.firstName,
			lastName : req.body.lastName,
			title : req.body.title,
			designation : req.body.designation,
			address : req.body.address,
			gender : req.body.gender,
			dob : req.body.dob,
			profilePicture : req.body.profilePicture,
			phone : req.body.phone,
			email : req.body.email,
			department : req.body.department
    });

    Employee.save((err, Employee) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating Employee',
          error: err
        });
      }
      return res.status(201).json(Employee);
    });
  },

  /**
   * EmployeeController.update()
   */
  update: (req, res) => {
    let id = req.params.id;
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(422).json({ message: "Invalid employee properties" })
    }
    EmployeeModel.findOne({_id: id}, (err, Employee) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Employee',
          error: err
        });
      }
      if (!Employee) {
        return res.status(404).json({
          message: 'No such Employee'
        });
      }

      Employee.firstName = req.body.firstName ? req.body.firstName : Employee.firstName;
			Employee.lastName = req.body.lastName ? req.body.lastName : Employee.lastName;
			Employee.title = req.body.title ? req.body.title : Employee.title;
			Employee.designation = req.body.designation ? req.body.designation : Employee.designation;
			Employee.address = req.body.address ? req.body.address : Employee.address;
			Employee.gender = req.body.gender ? req.body.gender : Employee.gender;
			Employee.dob = req.body.dob ? req.body.dob : Employee.dob;
			Employee.phone = req.body.phone ? req.body.phone : Employee.phone;
			Employee.email = req.body.email ? req.body.email : Employee.email;
			Employee.department = req.body.department ? req.body.department : Employee.department;
			
      Employee.save( (err, Employee) => {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating Employee.',
            error: err
          });
        }

        return res.json(Employee);
      });
    });
  },

  /**
   * EmployeeController.remove()
   */
  remove: (req, res) => {
    let id = req.params.id;
    EmployeeModel.findByIdAndRemove(id, (err, Employee) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the Employee.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
