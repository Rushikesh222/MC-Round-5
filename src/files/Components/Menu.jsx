import { useState } from "react";
import { Recipe } from "../../assets/Data";

import "./Menu.css";
import { useNavigate } from "react-router-dom";
export const Menu = () => {
  const navigate = useNavigate();
  const [searchItems, setsearchItems] = useState([]);
  const [categoryItems, setCategoryItems] = useState(Recipe);
  console.log(categoryItems);
  const handelSearch = (event) => {
    const inputvalue = event.target.value;
    const filtersInput = Recipe.filter(
      (items) =>
        items.name.toLowerCase().includes(inputvalue.toLowerCase()) ||
        items.ingredients.toLowerCase().includes(inputvalue.toLowerCase()) ||
        items.cuisinetype.toLowerCase().includes(inputvalue.toLowerCase())
    );
    setsearchItems(filtersInput);
  };
  const handlerCategory = (e) => {
    const inputCategory = e.target.value;
    const filterCategory = Recipe.filter((items) => {
      if (inputCategory === "name") {
        setCategoryItems(items?.name);
      }
      if (inputCategory === "ingredients") {
        setCategoryItems(items.ingredients);
      }
      if (inputCategory === "type") {
        setCategoryItems(items.cuisinetype);
      } else {
        setCategoryItems(Recipe);
      }
    });
    console.log(filterCategory);
  };

  return (
    <div className="items">
      <input type="text" placeholder="Seacrh" onChange={handelSearch} />
      <form onChange={handlerCategory}>
        <label>
          Name
          <input type="radio" name="name" value="name" />
        </label>
        <label>
          Ingredients
          <input type="radio" name="name" value="ingredients" />
        </label>
        <label>
          Cuisine type
          <input type="radio" name="name" value="type" />
        </label>
      </form>
      {searchItems.map((items) => {
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
