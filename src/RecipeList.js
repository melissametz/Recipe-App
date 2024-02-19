import React from "react";
import Recipe from "./Recipe.js"

const RecipeList = ({ recipes, deleteRecipe }) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Cuisine</th>
          <th>Photo</th>
          <th>Ingredients</th>
          <th>Preparations</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {recipes.map((recipe, index) => (
          <Recipe
            deleteRecipe={() => deleteRecipe(index)}
            key={index}
            recipe={recipe}
          />
        ))}
      </tbody>
    </table>
  );
}

export default RecipeList;
