import React, { useState } from "react";
import { Typography, InputBase, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  titleText: {
    fontSize: "1rem",
    fontWeight: "500",
    padding: "10px",
    width: '100%'
  },
 
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
          className={classes.titleText}
          style={{backgroundColor: '#d3d3d3'}}
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
