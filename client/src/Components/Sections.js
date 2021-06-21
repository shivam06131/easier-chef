import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: "6%",
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
        <Button className={classes.button} variant="outlined">
          All Recipes{" "}
        </Button>
      </Link>
      <Link to="/dashboard">
        <Button className={classes.button} variant="outlined">
          Create Your Recipes{" "}
        </Button>
      </Link>
    </div>
  );
};

export default Sections;
