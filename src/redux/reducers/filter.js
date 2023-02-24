const initState = {
  searchName: "",
};

export const filter = (state = initState, action) => {
  switch (action.type) {
    case "SEARCH_NAME":
      console.log("vào đây nữa");
      state = { ...state, searchName: action.payload };
      return state;

    default:
      return state;
  }
};
