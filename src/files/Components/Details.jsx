import { useParams } from "react-router-dom";
import { Recipe } from "../../assets/Data";
import { useState } from "react";

export const Detial = () => {
  const { userId } = useParams();
  const [fullRecipe, setFullrecipe] = useState(
    Recipe.filter((items) => items.id === parseInt(userId))
  );

  //   setFullrecipe(recipeDetials);

  return (
    <div>
      {fullRecipe.map((items) => {
        const { id, image, name, ingredients, cuisinetype, instructions } =
          items;
        return (
          <div className="item_list" key={id}>
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
