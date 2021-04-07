import React, { useState } from "react";
import { Paper, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import EditIcon from "@material-ui/icons/Edit";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useDispatch } from "react-redux";
import actions from "../../actions/actions";
import { Draggable } from "react-beautiful-dnd";
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

const Item = ({ itemData, listID, index }) => {
  //dispatch
  const dispatch = useDispatch();

  const classes = useStyles();

  const deleteItem = (itemID, listID) => {
    dispatch(actions.removeItem(itemID, listID));
  };

  const updateItem = (listID, itemID, description) => {
    dispatch(actions.updateItem(listID, itemID, description));
  };

  //states
  const [isClicked, setIsClicked] = useState(false);
  const [description, setDescription] = useState("");

  return (
    <div className={classes.itemContainer}>
      {isClicked ? (
        // Item edit input
        <InputBase
          className={classes.input}
          value={description}
          autoFocus={true}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          onBlur={() => {
            updateItem(listID, itemData.itemID, description);
            setIsClicked(!isClicked);
          }}
        />
      ) : (
        //item value
        <Draggable draggableId={itemData.itemID} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.dragHandleProps}
              {...provided.draggableProps}
            >
              <Paper className={classes.itemText}>
                {itemData.itemText}
                <HighlightOffIcon
                  color="action"
                  className={classes.deleteIcon}
                  onClick={() => {
                    deleteItem(itemData.itemID, listID);
                  }}
                />
                <EditIcon
                  className={classes.editIcon}
                  color="action"
                  onClick={() => {
                    setDescription(itemData.itemText);
                    setIsClicked(!isClicked);
                  }}
                />
              </Paper>
            </div>
          )}
        </Draggable>
      )}
    </div>
  );
};

export default Item;
