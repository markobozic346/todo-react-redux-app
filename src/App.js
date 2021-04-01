import "./App.css";
import List from "./components/List/List";
import { makeStyles } from "@material-ui/styles";
import InputContainer from "./components/Input/InputContainer";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { Droppable } from "react-beautiful-dnd";
const useStyle = makeStyles({
  listCointainer: {
    display: "flex",
  },
  App: {
    minHeight: "100vh",
    backgroundColor: "lightgreen",
    width: "100%",
    overflowX: "scroll",
  },
});

function App() {
  const data = useSelector((state) => state);
  let listCounter = 0;
  const handleDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    console.log(
      "destination:",
      destination,
      "source:",
      source,
      "draggId:",
      draggableId
    );
    // if dragged outside list exist function
    if (!destination) {
      return;
    }
    if (type === "list") {
      const newListOrder = data;
      const draggingList = data.filter((list) => list.id === draggableId);
      console.log(draggingList);
      newListOrder.splice(source.index, 1);
      newListOrder.splice(destination.index, 0, draggingList[0]);
      return;
    }
    const sourceList = data.filter((list) => list.id === source.droppableId);
    const destinationList = data.filter(
      (list) => list.id === destination.droppableId
    );
    const draggingItem = sourceList[0].items.filter(
      (item) => item.itemID === draggableId
    );

    console.log(
      "source",
      sourceList,
      "destinationList:",
      destinationList,
      "draggging:",
      draggingItem
    );
    // if dragged in same list
    if (source.droppableId === destination.droppableId) {
      sourceList[0].items.splice(source.index, 1);
      destinationList[0].items.splice(destination.index, 0, draggingItem[0]);
    } else {
      //if dragged in different list
      sourceList[0].items.splice(source.index, 1);
      destinationList[0].items.splice(destination.index, 0, draggingItem[0]);
    }
  };

  const classes = useStyle();
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="app" type="list" direction="horizontal">
        {(provided) => (
          <div
            className={classes.App}
            ref={provided.innerRef}
            {...provided.DroppableProps}
          >
            <div className={classes.listCointainer}>
              {data.map((list, index) => (
                <List
                  key={listCounter++}
                  listID={list.id}
                  listTitle={list.title}
                  listItems={list.items}
                  index={index}
                />
              ))}
              <InputContainer type="list" />
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
