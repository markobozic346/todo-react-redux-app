
import './App.css';
import List from './components/List/List'
import {makeStyles} from '@material-ui/styles'

const useStyle = makeStyles({
  listCointainer
})
function App() {
  return (
    <div className="App">
     <div className=''>
     <List />
     <List />
     <List />
     </div>
     
    </div>
  );
}

export default App;
