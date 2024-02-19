import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";
import { motion } from "framer-motion";

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
      <motion.header
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Melissa's Recipes</h1>
      </motion.header>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
      <RecipeList recipes={recipes} deleteRecipe={handleDeleteRecipe} />
      <RecipeCreate createRecipe={handleCreateRecipe} />
    </motion.div></div>
  );
}

export default App;
