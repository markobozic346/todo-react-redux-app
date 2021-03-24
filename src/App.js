import "./App.css";
import List from "./components/List/List";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  listCointainer: {
    display: 'flex',
  },
  App:{
    minHeight: '100vh',
    backgroundColor: 'lightgreen',
    width: '100%',
    overflowX: 'scroll',
  }
});
function App() {
  const classes = useStyle();
  return (
    <div className={classes.App}>
      <div className={classes.listCointainer}>
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
      </div>
    </div>
  );
}

export default App;
