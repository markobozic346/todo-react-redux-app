import data from "../data/data";

// inital counters

let lastListID = 3;
let lastItemID = 7;
const rootReducer = (state = data, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return [
        ...state,
        {
          id: ++lastListID,
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
                  itemID: ++lastItemID,
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
      
        case "UPDATE_TITLE":
          return state.map(list => list.id === action.payload.listID ? {
            ...list,
            title: action.payload.title
          }: list )
    
        default:
      return state;
  }
};
export default rootReducer;
