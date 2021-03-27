import "./App.css";
import List from "./components/List/List";
import { makeStyles } from "@material-ui/styles";
import InputContainer from "./components/Input/InputContainer";

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

  const data = useSelector(state => state.addReducer);
  
  const classes = useStyle();
  return (
    <div className={classes.App}>
      
      <div className={classes.listCointainer}>
         {data.map((list, i) => (
          
          <List
            key={i}
            listTitle={list.title}
            listItems={list.items}
          />
        ))}  
        <InputContainer type="list" />
      </div>
    </div>
  );
}

export default App;
