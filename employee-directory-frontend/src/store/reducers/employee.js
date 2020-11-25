import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  employees: null,
  error: null,
  loading: false,
  selectedEmployee: null,
};

// Fetch employees
const fetchEmployeesStart = (state, action) => {
  return updateObject(state, { error: null, loading: true, employees: null });
};

const fetchEmployeesSuccess = (state, action) => {
  return updateObject(state, {
    employees: action.employees,
    error: null,
    loading: false,
  });
};

const fetchEmployeesFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

// Add employee
const addEmployeeStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const addEmployeeSuccess = (state, action) => {
  return updateObject(state, {
    error: { message: "Employee added successfully" },
    loading: false,
  });
};

const addEmployeeFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

// Edit employee
const editEmployeeStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
  };
  
  const editEmployeeSuccess = (state, action) => {
    return updateObject(state, {
      error: { message: "Employee updated successfully" },
      loading: false,
    });
  };
  
  const editEmployeeFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false,
    });
  };

// Delete employee 
const deleteEmployeeSuccess = (state, action) => {
  const filteredEmployees = state.employees.filter(
    (employee) => employee._id !== action._id
  );
  return updateObject(state, {
    employees: filteredEmployees,
    error: { message: "Employee deleted successfully" },
    loading: false,
  });
};

const deleteEmployeeFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

// Select employee
const selectEmployee = (state, action) => {
  return updateObject(state, {
    selectedEmployee: action.employee,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Fetch employees
    case actionTypes.FETCH_EMPLOYEE_START:
      return fetchEmployeesStart(state, action);
    case actionTypes.FETCH_EMPLOYEE_SUCCESS:
      return fetchEmployeesSuccess(state, action);
    case actionTypes.FETCH_EMPLOYEE_FAIL:
      return fetchEmployeesFail(state, action);

    // Add employee
    case actionTypes.ADD_EMPLOYEE_START:
      return addEmployeeStart(state, action);
    case actionTypes.ADD_EMPLOYEE_SUCCESS:
      return addEmployeeSuccess(state, action);
    case actionTypes.ADD_EMPLOYEE_FAIL:
      return addEmployeeFail(state, action);

    // Edit employee
    case actionTypes.EDIT_EMPLOYEE_START:
      return editEmployeeStart(state, action);
    case actionTypes.EDIT_EMPLOYEE_SUCCESS:
      return editEmployeeSuccess(state, action);
    case actionTypes.EDIT_EMPLOYEE_FAIL:
      return editEmployeeFail(state, action);

    // Delete employee
    case actionTypes.DEL_EMPLOYEE_SUCCESS:
      return deleteEmployeeSuccess(state, action);
    case actionTypes.DEL_EMPLOYEE_FAIL:
      return deleteEmployeeFail(state, action);

    // Select employee
    case actionTypes.SELECT_EMPLOYEE:
      return selectEmployee(state, action);

    default:
      return state;
  }
};

export default reducer;
