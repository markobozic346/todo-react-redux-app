import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import Item from "./Item";
import InputContainer from "../Input/InputContainer";
import { Droppable, Draggable } from "react-beautiful-dnd";

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

const List = ({ listID, listTitle, listItems, index}) => {
  let listCounter = 0;
  const classes = useStyle();
  return (
      <Draggable draggableId={listID} index={index} >
          {(provided)=>(
              <div {...provided.draggableProps} ref={provided.innerRef}>
              <Paper elevation={3} className={classes.list} {...provided.dragHandleProps}>
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
            </div>
          )}
    
    </Draggable>
  );
};

export default List;
