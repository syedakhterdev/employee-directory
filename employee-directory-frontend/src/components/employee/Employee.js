import React from "react";
import ContentView from "../UI/ContentView/ContentView";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";

import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    textAlign: 'center'
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  error: {
    border: "1px solid red",
    borderRadius: "4px",
    width: "50%",
    color: "red",
    padding: "15px",
    fontWeight: "bold",
  },
});

const Employee = (props) => {
  const classes = useStyles();
  //   const bull = <span className={classes.bullet}>•</span>;

  const goToEdit = () => {
    props.history.push("editEmployee");
  };
  return (
    <ContentView>
      {props.employee?._id ? (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Avatar alt="John Doe" style={{ margin: "5px auto" }}>
              {" "}
              {props.employee?.firstName[0]}{" "}
            </Avatar>
            <Typography
              className={classes.title}
              component="h1"
              color="textSecondary"
              gutterBottom
            >
              {`${props.employee?.title} ${props.employee?.firstName} ${props.employee?.lastName}`}
            </Typography>
            <Typography variant="h5" component="h2">
              {props.employee?.email}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Born {new Date(props.employee?.dob).toLocaleDateString()}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
             {props.employee?.gender}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
            {props.employee?.designation}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {props.employee?.address}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
             <strong></strong> CreatedAt: {props.employee?.createdAt}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Updated At: {props.employee?.updatedAt}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              size="medium"
              style={{ margin: "5px auto" }}
              onClick={goToEdit}
            >
              Edit
            </Button>
          </CardActions>
        </Card>
      ) : (
        <p className={classes.error}>Select Employee First</p>
      )}
    </ContentView>
  );
};

const mapStateToProps = (state) => {
  return {
    employee: state.employee.selectedEmployee,
  };
};

export default connect(mapStateToProps)(Employee);
