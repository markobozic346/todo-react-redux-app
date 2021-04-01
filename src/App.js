import "./App.css";
import List from "./components/List/List";
import { makeStyles } from "@material-ui/styles";
import InputContainer from "./components/Input/InputContainer";
import { DragDropContext } from 'react-beautiful-dnd'
import {useSelector} from 'react-redux';

const useStyle = makeStyles({
  listCointainer: {
    display: "flex",
   
  },
  App: {
    minHeight: "100vh",
    backgroundColor: "lightgreen",
    width: "100%",
    overflowX: 'scroll'
  },
});


function App() {
  const data = useSelector(state => state);
  
  const handleDragEnd = (result) => {
  const {destination, source, draggableId} = result;
  console.log('destination:', destination, 'source:', source, 'draggId:', draggableId)
  // if dragged outside list exist function
  if(!destination){
    return
  }
  const sourceList = data.filter(list => list.id === source.droppableId);
  const destinationList = data.filter(list => list.id === destination.droppableId);
  const draggingItem = sourceList[0].items.filter(item => item.itemID === draggableId);

  console.log('source', sourceList ,'destinationList:', destinationList, 'draggging:', draggingItem)
  // if dragged in same list
   if(source.droppableId === destination.droppableId){
    sourceList[0].items.splice(source.index, 1)
    destinationList[0].items.splice(destination.index, 0 , draggingItem[0])
    
  }else{
    //if dragged in different list
    sourceList[0].items.splice(source.index, 1)
    destinationList[0].items.splice(destination.index, 0 , draggingItem[0])
  }
}

  const classes = useStyle();
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
    <div className={classes.App}>
      
      <div className={classes.listCointainer}>
         {data.map((list, i) => (
          
          <List
            key={i}
            listID={list.id}
            listTitle={list.title}
            listItems={list.items}
          />
        ))}  
        <InputContainer type="list" />
      </div>
    </div>
    </DragDropContext>
  );
}

export default App;
