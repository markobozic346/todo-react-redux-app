import React, { useState } from "react";
import { Paper, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import EditIcon from "@material-ui/icons/Edit";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useDispatch } from "react-redux";
import actions from "../../actions/actions";

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

const Item = ({itemData, listID} ) => {
  //dispatch
  const dispatch = useDispatch();
  
  const classes = useStyles();

  const deleteItem = (itemID, listID) =>{
    dispatch(actions.removeItem(itemID, listID));
  };


  //states
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
          {itemData.itemText}
          <HighlightOffIcon color="action" className={classes.deleteIcon} onClick={()=> {deleteItem(itemData.itemID, listID)}}/>
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
