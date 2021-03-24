import React, { useState } from "react";
import { Typography, InputBase, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  titleText: {
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

 }
});

const Title = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [title, setTitle] = useState("this is title");

  const classes = useStyle();
  return (
    <>
      {/* toggle between title and input field on click / lose focus */}
      {!isClicked ? (
        <Typography
          className={classes.titleText}
          onClick={() => setIsClicked(!isClicked)}
        >
          {title}
        </Typography>
      ) : (
        <InputBase
          className={classes.input}
          value={title}
          autoFocus={true}
          onBlur={() =>
            //update title value later here
            setIsClicked(!isClicked)
          }
        ></InputBase>
      )}
    </>
  );
};

export default Title;
