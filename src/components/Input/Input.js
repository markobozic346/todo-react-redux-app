import React, {useState} from 'react'
import { makeStyles } from "@material-ui/styles";
import { Paper, InputBase, Button } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles({
    button: {
      width: "100%",
    },
    input: {
      width: "96%",
      margin: "5px",
      backgroundColor: "white",
      height: "50px",
    },
    icon: {
      "&:hover": {
        color: "red",
      },
      float: "right",
      marginRight: "10px",
    },
    confirmAddButton: {
      backgroundColor: "lightgreen",
      marginLeft: "5px",
    },
  });
  
  
  
  
  const Input = ({type}) => {
    const [isClicked, setIsClicked] = useState(false);
    const classes = useStyles();
    return (
      <div>
        {isClicked ? (
          <>
            <InputBase
              autoFocus={true}
              onBlur={() => {
                setIsClicked(!isClicked);
              }}
              className={classes.input}
            />
            <Button className={classes.confirmAddButton}>add new {type} </Button>
            <HighlightOffIcon className={classes.icon} color="action" />
          </>
        ) : (
          <Button
            className={classes.button}
            onClick={() => setIsClicked(!isClicked)}
          >
            <AddIcon />
            add another {type}
          </Button>
        )}
      </div>
    );
  };
  
export default Input