import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { InputBase, Button } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AddIcon from "@material-ui/icons/Add";
import actions from "../../actions/actions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  button: {
    position: 'relative',
    top: '30px',
    width: "100%",
  },
  input: {
    width: "96%",
    margin: "5px",
    backgroundColor: "white",
    height: "50px",
  },
  icon: {
    "&:hover": {
      color: "red",
    },
    float: "right",
    marginRight: "10px",
  },
  confirmAddButton: {
    float: "left",
    backgroundColor: "lightgreen",
    marginLeft: "5px",
  },
});

const Input = ({ type, listID }) => {
  
  //dispatch
  const dispatch = useDispatch();
  
  const handleAddDispatch = (type, value, listID) => {
    // adds new list
    if (type === "list") {
      dispatch(actions.addList(value));

      //adds new item in list
    } else {
      dispatch(actions.addItem(value, listID));
    }
  };
  
  const resetInputField = () => {
    setChange('');
    setIsClicked(!isClicked);
  }
  //states
  const [change, setChange] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const classes = useStyles();
  return (
    <div>
      {isClicked ? (
        <>
          <InputBase
            value={change}
            onChange={(e) => {
              setChange(e.target.value);
            }}
            autoFocus={true}
            className={classes.input}
          />
          <Button
            onClick={() => {
              handleAddDispatch(type, change, listID)
              resetInputField()
              
            }}
            className={classes.confirmAddButton}
          >
            add new {type}
          </Button>
          <HighlightOffIcon
            onClick={() => {
              setIsClicked(!isClicked);
              resetInputField();
            }}
            className={classes.icon}
            color="action"
          />
        </>
      ) : (
        <Button
          className={classes.button}
          onClick={() => setIsClicked(!isClicked)}
        >
          <AddIcon />
          add another {type}
        </Button>
      )}
    </div>
  );
};

export default Input;
