import { useState } from "react";

const sandwichRecipe = {
  "Multi Grain Bread": 3,
  Gralic: 3,
  Tomato: 1,
  Mayonnaise: "2 tbsp",
  Onion: 1,
  Potato: 1,
};

const carrotGingerSoupRecipe = {
  "Chopped Carrot": 6,
  "Chopped Ginger": 2,
  "Coconut Milk": "2 tbsp",
  Garlic: 4,
  Onion: 1,
};

const Recipes = () => {
  const [recipe, setRecipe] = useState({});

  return (
    <>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(sandwichRecipe)}>Sandwich Recipe</button>
      <button onClick={() => setRecipe(carrotGingerSoupRecipe)}>
        Carrot Ginger Soup Recipe
      </button>

      <ul>
        {Object.keys(recipe).map((ingrediant) => (
          <li key={ingrediant}>
            {ingrediant} : {recipe[ingrediant]}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Recipes;
