export const initialState = {
  recipeData: [],
  searchCategory: "name",
  searchInput: "",
};
export const reducerFunc = (state, { type, payload }) => {
  switch (type) {
    case "SET_RECEPIES":
      return { ...state, recipeData: payload };
    case "SET_SEARCH_CATEGORY":
      return { ...state, searchCategory: payload };
    case "SEARCH_INPUT":
      return { ...state, searchInput: payload };

    default:
      return state;
  }
};
