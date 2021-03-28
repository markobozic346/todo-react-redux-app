import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Paper } from "@material-ui/core";
import Input from "./Input";

const useStyles = makeStyles({
  list: {
    minWidth: "300px",
    backgroundColor: "#EBECF0",
    margin: '10px',
    padding: "10px 0 10px 0",
    height: "fit-content",
  },
});

const InputContainer = ({listID, type }) => {
  const classes = useStyles();
  return type === "list" ? (
    <Paper elevation={3} className={classes.list}>
      <Input  type={type} listID={listID}/>
    </Paper>
  ) : (
    <Input  type={type} listID={listID}/>
  );
};

export default InputContainer;
