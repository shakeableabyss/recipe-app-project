import React, { useState } from "react";

function RecipeCreate({recipes, addRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.

  //const initialData = {name: "", cuisine: "", photo: "", ingredients: "", preparation: ""};

  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(name, cuisine, photo, ingredients, preparation);
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input 
                id="name"
                name="name"
                type="text"
                required={true}
                onChange={(e) => setName(e.target.value)}
                />
              </td>
              <td>
              <input 
                id="cuisine"
                name="cuisine"
                type="text"
                required={true}
                onChange={(e) => setCuisine(e.target.value)}
                />
              </td>
              <td>
              <input
                id="photo"
                name="photo"
                type="text"
                required={true}
                onChange={(e) => setPhoto(e.target.value)}
                />
              </td>
              <td>
              <textarea 
                name="ingredients"
                id="ingredients" 
				        required={true} 
				        rows={2}
                value={ingredients}
				        onChange={(e) => setIngredients(e.target.value)} 
                />
              </td>
              <td>
              <textarea 
                name="preparation"
                id="preparation" 
				        required={true} 
				        rows={2}
                value={preparation}
				        onChange={(e) => setPreparation(e.target.value)} 
                />
              </td>
              <td>
              <button type="submit" ata-testid="formSubmit">Create</button>
              </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
