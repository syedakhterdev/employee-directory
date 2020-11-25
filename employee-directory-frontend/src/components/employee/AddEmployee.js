import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import AddEmployeeIcon from "@material-ui/icons/PersonAdd";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import ContentView from "../UI/ContentView/ContentView";


import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../store/actions/index";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  error: {
    border: "1px solid red",
    borderRadius: "4px",
    width: "100%",
    color: "red",
    padding: "15px",
    fontWeight: "bold",
  },
  center: { margin: "5px auto" },
}));

const AddEmployee = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState({ value: "" });
  const [designation, setDesignagtion] = useState({ value: "" });
  const [title, setTitle] = useState({ value: "Mr" });
  const [department, setDepartment] = useState({ value: "" });
  const [firstName, setFirstName] = useState({ value: "" });
  const [lastName, setLastName] = useState({ value: "" });
  const [dob, setDob] = useState({ value: "2000-01-01" });
  const [gender, setGender] = useState({ value: "" });
  const [phone, setPhone] = useState({ value: "" });
  const [address, setAddress] = useState({ value: "" });

  const onFieldChange = (event, fieldName) => {
    switch (fieldName) {
      case "title":
        setTitle({ value: event.target.value });
        break;
      case "lastName":
        setLastName({ value: event.target.value });
        break;
      case "firstName":
        setFirstName({ value: event.target.value });
        break;
      case "email":
        setEmail({ value: event.target.value });
        break;
      case "designation":
        setDesignagtion({ value: event.target.value });
        break;
      case "dob":
        setDob({ value: event.target.value });
        break;
      case "gender":
        setGender({ value: event.target.value });
        break;
      case "department":
        setDepartment({ value: event.target.value });
        break;
      case "phone":
        setPhone({ value: event.target.value });
        break;
      case "address":
        setAddress({ value: event.target.value });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddEmployee({
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value,
      dob: dob.value,
      title: title.value,
      gender: gender.value ? gender.value : undefined,
      designation: designation.value ? designation.value : undefined,
      phone: phone.value ? phone.value : undefined,
      department: department.value ? department.value : undefined,
      address: address.value ? address.value : undefined,
    })
    props.history.push('employees')
  };

  let form = (
    <>
      <FormControl variant="outlined" margin="normal" required fullWidth>
        <InputLabel id="demo-simple-select-outlined-label">Title</InputLabel>
        <Select
          name="title"
          onChange={(event) => onFieldChange(event, "title")}
          label="Title"
          value={title.value}
        >
          <MenuItem value={"Mr"}>Mr</MenuItem>
          <MenuItem value={"Ms"}>Ms</MenuItem>
          <MenuItem value={"Prof"}>Prof</MenuItem>
          <MenuItem value={"Dr"}>Dr</MenuItem>
        </Select>
      </FormControl>
      <TextField
        variant="outlined"
        margin="normal"
        required
        focused
        fullWidth
        name="firstName"
        label="First Name"
        type="text"
        id="firstname"
        autoComplete="firstname"
        value={firstName.value}
        onChange={(event) => onFieldChange(event, "firstName")}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="lastName"
        label="Last Name"
        type="text"
        id="lastname"
        autoComplete="lastname"
        value={lastName.value}
        onChange={(event) => onFieldChange(event, "lastName")}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        type="email"
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        autoFocus
        value={email.value}
        onChange={(event) => onFieldChange(event, "email")}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        type="text"
        id="phone"
        label="Phone"
        name="phone"
        autoFocus
        value={phone.value}
        onChange={(event) => onFieldChange(event, "phone")}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="designation"
        label="Designation"
        type="text"
        id="designation"
        value={designation.value}
        onChange={(event) => onFieldChange(event, "designation")}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Date of Birth"
        type="date"
        name="dob"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        value={dob.value}
        onChange={(event) => onFieldChange(event, "dob")}
      />

      <FormControl variant="outlined" margin="normal" required fullWidth>
        <InputLabel id="demo-simple-select-outlined-label">
          Department
        </InputLabel>
        <Select
          name="department"
          onChange={(event) => onFieldChange(event, "department")}
          label="Department"
          value={department.value}
        >
          <MenuItem value={"Client"}>IT</MenuItem>
          <MenuItem value={"Clinic"}>HR</MenuItem>
          <MenuItem value={"Doctor"}>Sales</MenuItem>
          <MenuItem value={"Admin"}>Marketing</MenuItem>
        </Select>
      </FormControl>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        type="text"
        id="address"
        label="Address"
        name="address"
        value={address.value}
        onChange={(event) => onFieldChange(event, "address")}
      />
      <FormControl variant="outlined" margin="normal" required fullWidth>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender"
          value={gender.value}
          onChange={(event) => onFieldChange(event, "gender")}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    </>
  );

  if (props.loading) {
    form = <Spinner />;
  }

  let errorMessage = null;
  if (props.error) {
    errorMessage = <p className={classes.error}>{props.error.message}</p>;
  }
  return (
    <ContentView>
      <CssBaseline />
      <Avatar className={[classes.avatar, classes.center].join(" ")}></Avatar>
      {errorMessage}
      <form className={classes.form}>
        {form}
        <Button
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSubmit}
          startIcon={<SaveIcon />}
        >
          Add Employee
        </Button>
      </form>
    </ContentView>
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
    onAddEmployee: (employee) => dispatch(actions.addEmployee(employee)),
  };
};
const mapStateToProps = (state) => {
  return {
    loading: state.employee.loading,
    error: state.employee.error
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps // or put null here if you do not have actions to dispatch
)(AddEmployee);
