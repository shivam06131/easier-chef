import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: "6%",
    [theme.breakpoints.only("xs")]: {
      marginTop: "20%",
      marginBottom: "8%",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "15%",
      marginBottom: "8%",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "10%",
      marginBottom: "3%",
    },
  },
  button: {
    width: "45%",
    margin: "0% 2%",
  },
}));

const Sections = () => {
  const classes = useStyles();
  return (
    <div className={classes.marginTop}>
      <Link to="/recipe">
        <Button className={classes.button} variant="outlined" color="primary">
          All Recipes
        </Button>
      </Link>
      <Link to="/dashboard">
        <Button className={classes.button} variant="outlined" color="primary">
          Create Recipes
        </Button>
      </Link>
    </div>
  );
};

export default Sections;
