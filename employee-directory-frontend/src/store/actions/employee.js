import * as actionTypes from "./actionTypes";
import axios from "axios";

const url = 'http://localhost:5000/employee'

// Fetching Employee

const fetchEmployeeStart = () => {
  return {
    type: actionTypes.FETCH_EMPLOYEE_START,
  };
};

export const fetchEmployeeSuccess = (employees) => {
  return {
    type: actionTypes.FETCH_EMPLOYEE_SUCCESS,
    employees: employees,
  };
};

export const fetchEmployeeFail = (error) => {
  return {
    type: actionTypes.FETCH_EMPLOYEE_FAIL,
    error: error,
  };
};

export const fetchEmployee = () => {
  return (dispatch) => {
    dispatch(fetchEmployeeStart());
    axios
      .get(url)
      .then((res) => {
        if (res && res.data) {
          dispatch(fetchEmployeeSuccess(res.data));
        } else {
          dispatch(fetchEmployeeFail({ message: "Something went wrong" }));
        }
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          // client received an error response (5xx, 4xx)
          dispatch(fetchEmployeeFail(err.response.data));
        } else if (err.request && err.request.data) {
          // client never received a response, or request never left
          dispatch(fetchEmployeeFail(err.request.data));
        } else {
          // anything else
          dispatch(fetchEmployeeFail({ message: "Something went wrong" }));
        }
      });
  };
};

// Adding Employee

const addEmployeeStart = () => {
  return {
    type: actionTypes.ADD_EMPLOYEE_START,
  };
};

export const addEmployeeSuccess = (employee) => {
  return {
    type: actionTypes.ADD_EMPLOYEE_SUCCESS,
    employee: employee,
  };
};

export const addEmployeeFail = (error) => {
  return {
    type: actionTypes.ADD_EMPLOYEE_FAIL,
    error: error,
  };
};

export const addEmployee = (employee) => {
  return (dispatch) => {
    dispatch(addEmployeeStart());
    axios
      .post(url, employee)
      .then((res) => {
          dispatch(addEmployeeSuccess(res.data));
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          // client received an error response (5xx, 4xx)
          dispatch(addEmployeeFail(err.response.data));
        } else if (err.request && err.request.data) {
          // client never received a response, or request never left
          dispatch(addEmployeeFail(err.request.data));
        } else {
          // anything else
          dispatch(addEmployeeFail({ message: "Something went wrong" }));
        }
      });
  };
};

// Delete Employee
export const deleteEmployeeFail = (error) => {
  return {
    type: actionTypes.DEL_EMPLOYEE_FAIL,
    error: error,
  };
};

export const deleteEmployeeSuccess = (id) => {
  return {
    type: actionTypes.DEL_EMPLOYEE_SUCCESS,
    _id: id,
  };
};

export const deleteEmployee = (id) => {
  return (dispatch) => {
    axios
      .delete(`${url}/${id}`)
      .then((res) => {
        if (res && res.data) {
          dispatch(deleteEmployeeSuccess(id));
        } else {
            dispatch(deleteEmployeeSuccess(id));
        }
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          // client received an error response (5xx, 4xx)
          dispatch(deleteEmployeeFail(err.response.data));
        } else if (err.request && err.request.data) {
          // client never received a response, or request never left
          dispatch(deleteEmployeeFail(err.request.data));
        } else {
          // anything else
          dispatch(deleteEmployeeFail({ message: "Something went wrong" }));
        }
      });
  };
};


// Editing Employee

const editEmployeeStart = () => {
  return {
    type: actionTypes.EDIT_EMPLOYEE_START,
  };
};

export const editEmployeeSuccess = (employee) => {
  return {
    type: actionTypes.EDIT_EMPLOYEE_SUCCESS,
    employee: employee,
  };
};

export const editEmployeeFail = (error) => {
  return {
    type: actionTypes.EDIT_EMPLOYEE_FAIL,
    error: error,
  };
};

export const editEmployee = (employee, id) => {
  return (dispatch) => {
    dispatch(editEmployeeStart());
    axios
      .put(`${url}/${id}`, employee)
      .then((res) => {
          dispatch(editEmployeeSuccess(res.data));
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          // client received an error response (5xx, 4xx)
          dispatch(editEmployeeFail(err.response.data));
        } else if (err.request && err.request.data) {
          // client never received a response, or request never left
          dispatch(editEmployeeFail(err.request.data));
        } else {
          // anything else
          dispatch(editEmployeeFail({ message: "Something went wrong" }));
        }
      });
  };
};


//  Select employee
export const selectEmployee = (employee) => {
  return {
    type: actionTypes.SELECT_EMPLOYEE,
    employee: employee,
  };
};



