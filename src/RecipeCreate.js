import React, { useState } from "react";

//Used to create a new recipe

const RecipeCreate = ({ createRecipe }) => {

  //The initial form state is important both for the state of the form when the page is loaded, and when a submit event occurs
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const ingredientsList = formData.ingredients
      .split(",")
      .map((ingredient, index) => (
        <li key={index}>{ingredient.trim()}</li>
      ));
    const preparationList = formData.preparation
      .split(",")
      .map((step, index) => <li key={index}>{step.trim()}</li>);
    createRecipe({
      ...formData,
      ingredients: ingredientsList,
      preparation: <ol>{preparationList}</ol>,
    });
    setFormData({ ...initialFormState });
  };

  return (
      <form name="create" onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="name">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    value={formData.name}
                  />
                </label>
              </td>
              <td>
                <label htmlFor="cuisine">
                  <input
                    id="cuisine"
                    type="text"
                    name="cuisine"
                    placeholder="Cuisine"
                    onChange={handleChange}
                    value={formData.cuisine}
                  />
                </label>
              </td>
              <td>
                <label htmlFor="photo">
                  <input
                    id="photo"
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    onChange={handleChange}
                    value={formData.photo}
                  />
                </label>
              </td>
              <td>
                <label htmlFor="ingredients">
                  <textarea
                    id="ingredients"
                    type="text"
                    name="ingredients"
                    placeholder="Ingredients"
                    onChange={handleChange}
                    value={formData.ingredients}
                  />
                </label>
              </td>
              <td>
                <label htmlFor="preparation">
                  <textarea
                    id="preparation"
                    type="text"
                    name="preparation"
                    placeholder="Preparation"
                    onChange={handleChange}
                    value={formData.preparation}
                  />
                </label>
              </td>
              <td>
                <button type="submit">Create</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
  );
}

export default RecipeCreate;
