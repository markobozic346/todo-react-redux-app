import "./App.css";
import List from "./components/List/List";
import { makeStyles } from "@material-ui/styles";
import InputContainer from "./components/Input/InputContainer";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { Droppable } from "react-beautiful-dnd";
import {useDispatch} from "react-redux";
import actions from './actions/actions'
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
  // get data from state
  const data = useSelector((state) => state);
  // key for list components
  let listCounter = 0;

  // initialize dispatch function
  const dispatch = useDispatch();
  
  const updateState = () => {
    dispatch(actions.updateOnDragAndDrop());
  }

  const handleDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    
    // if dragged outside list exist function
    if (!destination) {
      return;
    }
    // if type of dragged element is list
    if (type === "list") {
      const newListOrder = data;
      const draggingList = data.filter((list) => list.id === draggableId);
      console.log(draggingList);
      newListOrder.splice(source.index, 1);
      newListOrder.splice(destination.index, 0, draggingList[0]);
      updateState();
      return;
    }
    // list from where is dragging
    const sourceList = data.filter((list) => list.id === source.droppableId);
    // list where is dropped
    const destinationList = data.filter(
      (list) => list.id === destination.droppableId
    );
    // item which is dragged
    const draggingItem = sourceList[0].items.filter(
      (item) => item.itemID === draggableId
    );

    // if dragged in same list
    if (source.droppableId === destination.droppableId) {
      sourceList[0].items.splice(source.index, 1);
      destinationList[0].items.splice(destination.index, 0, draggingItem[0]);
      updateState();
    } else {
      //if dragged in different list
      sourceList[0].items.splice(source.index, 1);
      destinationList[0].items.splice(destination.index, 0, draggingItem[0]);
      updateState();
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
