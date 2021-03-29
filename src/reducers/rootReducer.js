import data from "../data/data";

// inital counters
const counters = {
  list: 3,
  items: 7,
};

const rootReducer = (state = data, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return [
        ...state,
        {
          id: counters.list + 1,
          title: action.payload.title,
          items: [],
        },
      ];
    case "ADD_ITEM":
      return state.map((list) =>
        list.id === action.payload.id
          ? {
              ...list,
              items: [
                ...list.items,
                {
                  itemID: counters.items + 1,
                  itemText: action.payload.description,
                },
              ],
            }
          : list
      );
    case "REMOVE_ITEM":
      return state.map((list) =>
        list.id === action.payload.listID
          ? {
              ...list,
              items: list.items.filter(
                (item) => item.itemID !== action.payload.itemID
              ),
            }
          : list
      );
      case "REMOVE_LIST":
        return state.filter(list => list.id !== action.payload.listID)
    default:
      return state;
  }
};
export default rootReducer;
