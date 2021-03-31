import React, { useState } from "react";
import { Typography, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useDispatch } from "react-redux";
import actions from "../../actions/actions";

const useStyle = makeStyles({
  titleText: {
    marginTop: '5px',
    fontSize: "1rem",
    fontWeight: "600",
    width: '96%',
    padding: '8px'
    
  },
 input:{
  fontWeight: "600",
   fontSize: '1rem',
   width: '96%',
   backgroundColor: 'white',
   margin: '8px',

 },
 deleteIcon: {
  float: 'right',
  marginRight: '5px',
  "&:hover": {
    color: "red",
  },
 }
});

const Title = ({listTitle, listID}) => {
  const dispatch = useDispatch();

  const removeList = (listID) => {
    dispatch(actions.removeList(listID))
  }

  const updateTitle = (listID, title) => {
    dispatch(actions.updateTitle(listID, title))
  }
  const [isClicked, setIsClicked] = useState(false);
  const [title, setTitle] = useState("");

  const classes = useStyle();
  return (
    <>
      {/* toggle between title and input field on click / lose focus */}
      {!isClicked ? (
        <Typography
          className={classes.titleText}
          onClick={() => setIsClicked(!isClicked)}
        >
         {listTitle}
         <HighlightOffIcon className={classes.deleteIcon} onClick={() => {removeList(listID)}} />
        </Typography>
      ) : (
        <InputBase
          className={classes.input}
          value={title}
          autoFocus={true}
          onChange={(e)=> setTitle(e.target.value)

          }
          onBlur={() =>
            {
            
            updateTitle(listID, title)
            setIsClicked(!isClicked);
            }
          }
        ></InputBase>
      )}
    </>
  );
};

export default Title;
