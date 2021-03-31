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


function App(store) {

  const data = useSelector(state => state);
  
  const classes = useStyle();
  return (
    <DragDropContext>
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
