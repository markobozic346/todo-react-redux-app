import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import Item from "./Item";
import InputContainer from "../Input/InputContainer";
import { Droppable } from "react-beautiful-dnd";

const useStyle = makeStyles({
  list: {
    minWidth: "300px",
    width: "300px",
    backgroundColor: "#EBECF0",
    margin: "10px",
    paddingBottom: "10px",
    height: "fit-content",
  },
  droppable: {
    paddingTop: "10px",
  },
});

const List = ({ listID, listTitle, listItems }) => {
  let listCounter = 0;
  const classes = useStyle();
  return (
    <Paper elevation={3} className={classes.list}>
      <Title listTitle={listTitle} listID={listID} />

      <Droppable droppableId={listID}>
        {(provided) => (
          <div
            className={classes.droppable}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {listItems.map((item, i) => (
              <Item
                key={listCounter++}
                itemData={item}
                listID={listID}
                index={i}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <InputContainer type="item" listID={listID} />
    </Paper>
  );
};

export default List;
