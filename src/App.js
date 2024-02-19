import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

const App = () => {
  const [recipes, setRecipes] = useState(RecipeData);
  
  const handleCreateRecipe = (recipe) => {   
    setRecipes((currentRecipes) => [
    ...currentRecipes,
    recipe
    ]);
  }
  
   const handleDeleteRecipe = (indexToDelete) =>
    setRecipes((currentRecipes) =>
    currentRecipes.filter((recipe, index) => index !== indexToDelete)  
);

  
  return (
    <div className="App">
      <header><h1>Melissa's Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={handleDeleteRecipe}/>
      <RecipeCreate  createRecipe={handleCreateRecipe}/>
    </div>
  );
}

export default App;
