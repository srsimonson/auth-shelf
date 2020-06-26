const itemReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_ITEMS_LIST":
      return action.payload;
    case "UNSET_ITEMS":
      return [];
    default:
      return state;
  }
};

export default itemReducer;
