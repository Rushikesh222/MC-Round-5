import "./Menu.css";
import { useNavigate } from "react-router-dom";
import { useRecipe } from "../context/Cardcontext";
export const Menu = () => {
  const navigate = useNavigate();
  const { state, dispatch, searchRecipe } = useRecipe();
  console.log(searchRecipe());
  const handleSearchingCategory = (e) => {
    dispatch({ type: "SET_SEARCH_CATEGORY", payload: e.target.value });
  };

  return (
    <div className="items">
      <input
        type="text"
        placeholder="Search"
        value={state?.searchInput}
        onChange={(e) =>
          dispatch({ type: "SEARCH_INPUT", payload: e.target.value })
        }
      />
      <label>
        Name
        <input
          type="radio"
          name="name"
          value="name"
          checked={state?.searchCategory === "name"}
          onChange={handleSearchingCategory}
        />
      </label>
      <label>
        Ingredients
        <input
          type="radio"
          name="name"
          value="ingredients"
          checked={state?.searchCategory === "ingredients"}
          onChange={handleSearchingCategory}
        />
      </label>
      <label>
        Cuisine type
        <input
          type="radio"
          name="name"
          value="type"
          checked={state?.searchCategory === "type"}
          onChange={handleSearchingCategory}
        />
      </label>

      {searchRecipe()?.map((items) => {
        const { id, image, name, ingredients, cuisinetype, instructions } =
          items;
        return (
          <div
            onClick={() => navigate(`/profile/${id}`)}
            className="item_list"
            key={id}
          >
            <img src={image} alt="image" />
            <h3>{name}</h3>
            <p>
              <strong>Cuisine Type</strong>:{cuisinetype}
            </p>
            <p>
              <strong>Ingredients</strong>: {ingredients}
            </p>
            <p>
              <strong>instructions</strong>:{" "}
              <div>
                {instructions.map((list) => (
                  <div>
                    <ol>
                      <li>{list}</li>
                    </ol>
                  </div>
                ))}
              </div>
            </p>
          </div>
        );
      })}
    </div>
  );
};
