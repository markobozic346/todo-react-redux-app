import React, { useState } from "react";
import { Typography, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useDispatch } from "react-redux";
import actions from "../../actions/actions";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EditIcon from "@material-ui/icons/Edit";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const useStyle = makeStyles({
  titleText: {
    marginTop: "5px",
    fontSize: "1rem",
    fontWeight: "600",
    width: "96%",
    padding: "8px",
  },
  input: {
    fontWeight: "600",
    fontSize: "1rem",
    width: "96%",
    backgroundColor: "white",
    margin: "8px",
  },
  dropMenu: {
    float: "right",
    marginRight: "5px",
    "&:hover": {
      color: "gray",
    },
  },
});

const Title = ({ listTitle, listID }) => {
  const classes = useStyle();
  const dispatch = useDispatch();

  const removeList = (listID) => {
    dispatch(actions.removeList(listID));
  };

  const updateTitle = (listID, title) => {
    dispatch(actions.updateTitle(listID, title));
  };

  //states
  const [isClicked, setIsClicked] = useState(false);
  const [title, setTitle] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      {/* toggle between title and input field on click / lose focus */}
      {!isClicked ? (
        <Typography
          className={classes.titleText}
          onClick={() => {
            setTitle(listTitle);
          }}
        >
          {listTitle}
          <MoreVertIcon
            className={classes.dropMenu}
            aria-controls="more-menu"
            aria-haspopup="true"
            onClick={(e) => {
              setAnchorEl(e.currentTarget);
            }}
          />
          <Menu
            id="more-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => {
              setAnchorEl(null);
            }}
          >
            <MenuItem
              onClick={() => {
                setIsClicked(!isClicked);
              }}
            >
              <EditIcon />
              Edit
            </MenuItem>
            <MenuItem
              onClick={() => {
                removeList(listID);
                setAnchorEl(null);
              }}
            >
              <HighlightOffIcon />
              Delete
            </MenuItem>
          </Menu>
        </Typography>
      ) : (
        <InputBase
          className={classes.input}
          value={title}
          autoFocus={true}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={() => {
            updateTitle(listID, title);
            setAnchorEl(null);
            setIsClicked(!isClicked);
          }}
        ></InputBase>
      )}
    </>
  );
};

export default Title;
