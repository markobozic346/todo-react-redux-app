import "./App.css";
import List from "./components/List/List";

import { makeStyles } from "@material-ui/styles";
import InputContainer from './components/Input/InputContainer'
const useStyle = makeStyles({
  listCointainer: {
   display: 'flex',
   justifyContent: 'flex-start',
  },
  App:{
    minHeight: '100vh',
    backgroundColor: 'lightgreen',
    width: '100%',
    overflowY: 'auto',
  }
});
function App() {
  const classes = useStyle();
  return (
    <div className={classes.App}>
      <div className={classes.listCointainer}>
        <List key={1} />
        <List key={2}/>
        <List key={3}/>
        <List key={4}/>
        <List key={5}/>
        <List key={6}/>
        <InputContainer type="list"/>
      </div>
    </div>
  );
}

export default App;
