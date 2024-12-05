import { useState } from "react";

const Searchrecipy = () => {
    const [mealData, setMealData] = useState([]);  // Initialize as an empty array
    const [recipes, setRecipes] = useState("");  // Default as empty string
    const [recipeNumbers, setRecipeNumbers] = useState(0);  // Default as 0
    const [selectedRecipe, setSelectedRecipe] = useState(null); // State to hold the selected recipe details
    const [extractedRecipeData, setExtractedRecipeData] = useState(null); // State for the extracted data

    // Handle input change for ingredients
    function handleIngredientsChange(e) {
        setRecipes(e.target.value);
    }

    // Handle input change for number of recipes
    function handleNumberChange(e) {
        setRecipeNumbers(e.target.value);
    }

    // Fetch meal data from API
    function getMealData() {
        if (!recipes || !recipeNumbers) {
            console.log("Please enter both ingredients and number of recipes.");
            return;  // Prevent making the API call if inputs are empty
        }

        fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${recipes}&number=${recipeNumbers}&apiKey=2940e997aaab4a28bbb4b6560d0477b2`)
            .then((response) => response.json())
            .then((data) => {
                // Check if the data is an array
                if (Array.isArray(data)) {
                    setMealData(data);  // Save response to mealData state
                } else {
                    console.log("Received data is not an array.");
                    setMealData([]);  // If data is not an array, set mealData to an empty array
                }
            })
            .catch(() => {
                console.log("Error fetching meal data.");
                setMealData([]);  // Set to empty array in case of an error
            });
    }

    // Display more details of the selected recipe
    function handleRecipeClick(meal) {
        setSelectedRecipe(meal);  // Set the clicked recipe to show more details
        
        // Fetch additional data using the extract endpoint
        fetch(`https://api.spoonacular.com/recipes/${meal.id}/information?includeNutrition=false&apiKey=2940e997aaab4a28bbb4b6560d0477b2`)
            .then((response) => response.json())
            .then((data) => {
                setExtractedRecipeData(data);  // Store extracted data
                console.log("Extracted Data:", data);
            })
            .catch((error) => {
                console.error("Error fetching extracted data:", error);
            });
    }

    return (
        <div className="container mt-4">
            <section className="controls mb-4">
                {/* Ingredients input */}
                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter the ingredients you have" 
                        value={recipes}
                        onChange={handleIngredientsChange}
                    />
                </div>
                
                {/* Number of recipes input */}
                <div className="mb-3">
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Enter the number of recipes you want" 
                        value={recipeNumbers}
                        onChange={handleNumberChange}
                    />
                </div>
            </section>
            <button className="btn btn-primary" onClick={getMealData}>Get Daily Meal Plan</button>

            {/* Display meal data if available */}
            {Array.isArray(mealData) && mealData.length > 0 ? (
                <div className="mt-4">
                    <h3 className="mb-4">Meal Results:</h3>
                    <div className="row">
                        {mealData.map((meal, index) => (
                            <div className="col-md-4 mb-4" key={index}>
                                <div className="card" onClick={() => handleRecipeClick(meal)} style={{ cursor: "pointer" }}>
                                    <img src={meal.image} alt={meal.title} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{meal.title}</h5>
                                        <p className="card-text">Click for more details</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>No meals found or data is not in the expected format.</p>
            )}

            {/* Display the detailed recipe if selected */}
            {selectedRecipe && extractedRecipeData && (
                <div className="mt-5">
                    <h3 className="mb-3">{selectedRecipe.title}</h3>
                    
                    {/* Recipe Image */}
                    <div className="mb-4">
                        <img 
                            src={selectedRecipe.image} 
                            alt={selectedRecipe.title} 
                            className="img-fluid rounded" 
                            style={{ maxWidth: "500px" }}
                        />
                    </div>

                    {/* Ingredients List */}
                    <div className="mb-4">
                        <h4>Ingredients</h4>
                        <ul className="list-group">
                            {extractedRecipeData.extendedIngredients.map((ingredient, index) => (
                                <li key={index} className="list-group-item">
                                    {ingredient.original}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Instructions */}
                    <div>
                        <h4>Instructions</h4>
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">{extractedRecipeData.instructions}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Searchrecipy;
