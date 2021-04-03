const addList = (title) => {
  return {
    type: "ADD_LIST",
    payload: {
      title,
    },
  };
};

const addItem = (description, id) => {
  return {
    type: "ADD_ITEM",
    payload: {
      description,
      id,
    },
  };
};

const updateTitle = (listID, title) => {
  return {
    type: "UPDATE_TITLE",
    payload: {
      listID,
      title,
    },
  };
};

const updateItem = (listID, itemID, description) => {
  return {
    type: "UPDATE_ITEM",
    payload: {
      listID,
      itemID,
      description,
    },
  };
};

const removeList = (listID) => {
  return {
    type: "REMOVE_LIST",
    payload: {
      listID,
    },
  };
};

const removeItem = (itemID, listID) => {
  return {
    type: "REMOVE_ITEM",
    payload: {
      itemID,
      listID,
    },
  };
};
const updateOnDragAndDrop = () => {
  return { type: "UPDATE_ON_DRAG_AND_DROP" };
};

export default {
  addList,
  addItem,
  removeItem,
  removeList,
  updateTitle,
  updateItem,
  updateOnDragAndDrop
};
