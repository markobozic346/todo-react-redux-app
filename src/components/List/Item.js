import React, { useState } from "react";
import { Paper, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import EditIcon from "@material-ui/icons/Edit";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const useStyles = makeStyles({
  itemContainer: {
    margin: "5px",
  },
  itemText: {
    margin: "auto 0 auto 0",
    padding: "5px",
    fontSize: "0.9rem",
    fontWeight: "400",
  },

  input: {
    fontSize: "0.9rem",
    backgroundColor: "white",
    width: "100%",
    paddingLeft: "5px",
  },
  deleteIcon: {
    "&:hover": {
      color: "red",
    },
    float: "right",
  },
  editIcon: {
    "&:hover": {
      color: "black",
    },
    float: "right",
  },
});

const Item = (itemText) => {
  const classes = useStyles();

  const [isClicked, setIsClicked] = useState(false);
  const [itemValue, setItemValue] = useState("finish this project u dumb");
  return (
    <div className={classes.itemContainer}>
      {isClicked ? (
        <InputBase
          className={classes.input}
          value={itemValue}
          autoFocus={true}
          onBlur={() => {
            setIsClicked(!isClicked);
          }}
        />
      ) : (
        <Paper className={classes.itemText}>
          {itemText.itemText}
          <HighlightOffIcon color="action" className={classes.deleteIcon} />
          <EditIcon
            className={classes.editIcon}
            color="action"
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          />
        </Paper>
      )}
    </div>
  );
};

export default Item;
