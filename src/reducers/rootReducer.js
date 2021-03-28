import data from "../data/data";

const rootReducer = (state = data, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return [
        ...state,
        {
          id: 9,
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
                  itemID: 89,
                  itemText: action.payload.description,
                },
              ],
            }
          : list
      );

    default:
      return state;
  }
};
export default rootReducer;
