import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Paper } from "@material-ui/core";
import Input from "./Input";

const useStyles = makeStyles({
  list: {
    minWidth: "300px",
    backgroundColor: "#EBECF0",
    margin: "10px",
    paddingBottom: "10px",
    height: "fit-content",
  },
});

const InputContainer = ({ type }) => {
  const classes = useStyles();
  return type === "list" ? (
    <Paper elevation={3} className={classes.list}>
      {" "}
      <Input type={type} />{" "}
    </Paper>
  ) : (
    <Input type={type} />
  );
};

export default InputContainer;
