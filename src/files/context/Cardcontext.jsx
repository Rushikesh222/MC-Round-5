import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Recipe } from "../../assets/Data";
import { initialState, reducerFunc } from "../Reducer/Reducer";

export const RecipeContext = createContext();
export const RecipeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  const searchRecipe = () => {
    return state?.searchInput === ""
      ? state?.recipeData
      : state?.recipeData.filter((recipe) => {
          if (state?.searchCategory === "name") {
            return recipe.name
              .toLowerCase()
              .includes(state?.searchInput.toLowerCase());
          } else if (state?.searchCategory === "ingredients") {
            return recipe.ingredients
              .toLowerCase()
              .includes(state?.searchInput.toLowerCase());
          } else if (state?.searchCategory === "type") {
            return recipe.cuisinetype
              .toLowerCase()
              .includes(state?.searchInput.toLowerCase());
          }
        });
  };
  useEffect(() => {
    const storedRecipies = localStorage.getItem("recipes");
    if (storedRecipies) {
      dispatch({
        type: "SET_RECEPIES",
        payload: JSON.parse(storedRecipies),
      });
    } else {
      localStorage.setItem("recipes", JSON.stringify(Recipe));
      dispatch({ type: "SET_RECEPIES", payload: Recipe });
    }
  }, []);

  return (
    <RecipeContext.Provider value={{ state, dispatch, searchRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};
export const useRecipe = () => useContext(RecipeContext);
