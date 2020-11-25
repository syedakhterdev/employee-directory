import React, { useEffect, useState } from "react";
import DataTable from "../../components/UI/Table/Table";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ViewIcon from "@material-ui/icons/Visibility";
import IconButton from "@material-ui/core/IconButton";

import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../store/actions/index";
import ContentView from "../UI/ContentView/ContentView";

const useStyles = makeStyles((theme) => ({
  error: {
    border: "1px solid red",
    borderRadius: "4px",
    width: "100%",
    color: "red",
    padding: "15px",
    fontWeight: "bold",
  },
  button: {
    margin: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 400,
  },
}));

const EmployeesView = (props) => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    props.loadEmployees();
  }, []);

  useEffect(() => {
  }, [props.employees]);

  const getSelectedRow = (params) => {
    setSelectedRow({ id: params.data._id, ...params });
    props.onSelectEmployee({ id: params.data._id, ...params.data });
  };

  const handleDelete = (id) => {
    props.deleteEmployee(id);
  };

  const handleEdit = () => {
    props.history.push("editEmployee");
  };

  const handleView = () => {
    props.history.push("employee");
  };

  const columns = [
    {
      width: 160,
      field: "",
      headerName: "Action",
      renderCell: (params) => (
        <div className={classes.buttons}>
          <IconButton color="inherit" onClick={() => handleDelete(params.data.id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton color="inherit" onClick={() => handleView()}>
            <ViewIcon />
          </IconButton>
          <IconButton color="inherit" onClick={() => handleEdit()}>
            <EditIcon />
          </IconButton>
        </div>
      ),
    },
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" },
    { field: "dob", headerName: "Date of Birth" },
    { field: "gender", headerName: "Gender" },
    { field: "email", headerName: "Email" },
    { field: "phone", headerName: "Phone" },
    { field: "department", headerName: "Department" },
    { field: "designation", headerName: "Designation" },
    { field: "address", headerName: "Address" },
    { field: "createdAt", headerName: "CreatedAt" },
    { field: "updatedAt", headerName: "UpdatedAt" },
  ];

  let data = null;
  if (props.employees?.length) {
    data = (
      <DataTable
        onRowSelected={getSelectedRow}
        columns={columns}
        rows={props.employees?.map((elm) => {
          return {
            ...elm,
            id: elm._id,
            name: `${elm.title} ${elm.firstName} ${elm.lastrName}`,
          };
        })}
        rowsPerPageOptions={[10, 25, 50]}
      />
    );
  }

  if (props.loading) {
    data = <Spinner />;
  }

  let errorMessage = null;
  if (props.error) {
    errorMessage = <p className={classes.error}>{props.error?.message}</p>;
  }
  return (
    <ContentView>
      <Grid item xs={12} md={12} lg={12}>
        <Paper className={fixedHeightPaper}>
          <h1>Employees</h1>
          {/* {selectedRow?.id ? (
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={() => handleDelete(selectedRow.id)}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<EditIcon />}
                onClick={() => handleEdit()}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<ViewIcon />}
                onClick={() => handleView()}
              >
                View
              </Button>
            </div>
          ) : null} */}
          {errorMessage}
          {data}
        </Paper>
      </Grid>
    </ContentView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadEmployees: () => dispatch(actions.fetchEmployee()),
    deleteEmployee: (id) => dispatch(actions.deleteEmployee(id)),
    onSelectEmployee: (employee) => dispatch(actions.selectEmployee(employee)),
  };
};
const mapStateToProps = (state) => {
  return {
    loading: state.employee.loading,
    error: state.employee.error,
    employees: state.employee.employees,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps // or put null here if you do not have actions to dispatch
)(EmployeesView);
