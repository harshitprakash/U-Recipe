import { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Searchrecipy = () => {
    const [mealData, setMealData] = useState([]);  // Initialize as an empty array for random recipes
    const [allRecipes, setAllRecipes] = useState([]);  // New state to store all 25 recipes
    const [recipes, setRecipes] = useState("");  // Default as empty string for user input
    const [recipeNumbers, setRecipeNumbers] = useState(0);  // Default as 0
    const [selectedRecipe, setSelectedRecipe] = useState(null);  // State to hold the selected recipe details
    const [extractedRecipeData, setExtractedRecipeData] = useState(null);  // State for the extracted data
    const [isClicked, setIsClicked] = useState(false);  // State to track if a recipe is clicked

    const [open, setOpen] = useState(false);
    const[error,setError] = useState("");

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
        setIsClicked(true);  // Set isClicked to true to indicate that the recipe is clicked
        if (!recipes || !recipeNumbers) {
            setError("Please enter both ingredients and number of recipes.");
            return;  // Prevent making the API call if inputs are empty
        }

        // Check if we've already fetched results for the same ingredients
        if (allRecipes.length > 0 && recipes === allRecipes[0].ingredients) {
            console.log("Using previously fetched results");
            setMealData(getRandomRecipes(allRecipes, 4)); // Select 4 random recipes from the stored 25
            return;
        }

        // Fetch data from the API using the ingredients and number
        fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${recipes}&number=25&apiKey=2940e997aaab4a28bbb4b6560d0477b2`)
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setAllRecipes(data);  // Store the fetched 25 recipes in the new state
                    setMealData(getRandomRecipes(data,recipeNumbers));  // Select 4 random recipes
                    setError("")    
                } else {
                    setError("Payment is Required");
                    setMealData([]);  // If data is not an array, set mealData to an empty array
                }
            })
            .catch(() => {
                console.log("Error fetching meal data.");
                setMealData([]);  // Set to empty array in case of an error
            });
    }

    // Function to get random recipes from the fetched data
    function getRandomRecipes(data, number) {
        const randomRecipes = [];
        const usedIndexes = new Set();

        // Randomly pick 'number' recipes
        while (randomRecipes.length < number) {
            const randomIndex = Math.floor(Math.random() * data.length);
            if (!usedIndexes.has(randomIndex)) {
                usedIndexes.add(randomIndex);
                randomRecipes.push(data[randomIndex]);
            }
        }

        return randomRecipes;
    }

    // Display more details of the selected recipe
    function handleRecipeClick(meal) {
        setOpen(true);  // Set isClicked to true to indicate that the recipe is clicked
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
        <div >
            <div className={`d-flex m-0 ${isClicked ? 'rounded-bottom-circle' : ''}`} style={{ backgroundColor: '#7dcfb6',height: isClicked ? '450px' : '700px' }}>
                <div className="container ms-5 me-5 mt-4 mb-5">
                        <section className="controls "style={{marginTop:isClicked?'':'100px'}}>
                            {/* Ingredients input */}
                            <div className="row">
                                <div className="col-sm-2">
                                </div>
                                <div className="col-sm-8 mb-4 text-light text-center">
                                    <h1>Enter the ingredient you have & </h1>
                                    <h1>select number of recipy you want</h1>
                                </div>
                                <div className="col-sm-2">
                                </div>
                            <div className="mb-3 col-sm-3"></div>
                                <div className="mb-3 col-sm-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter the ingredients you have"
                                        value={recipes}
                                        onChange={handleIngredientsChange}
                                    />
                                </div>

                                {/* Number of recipes input */}
                                <div className="mb-3 col-sm-2">
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={recipeNumbers}
                                        onChange={handleNumberChange}
                                    />
                                </div>
                                <div className="mb-3 col-sm-3"></div>
                            </div>
                            
                            <button className="btn btn-danger mx-auto d-block mt-4" onClick={getMealData}>Get Recipe</button>
                        </section>     
                </div>
            </div>
            <div className="ms-5">
                    {/* Display a message after clicking on a recipe */}
                    {error ? (
                        ""
                    ) : (
                        isClicked && (
                            <div className="mt-5">
                                <p>{selectedRecipe ? "Recipe Selected: " + selectedRecipe.title : "No recipe selected yet."}</p>
                                <p>{isClicked ? "Please select a recipe" : "Please click a recipe"}</p>
                            </div>
                        ))
                    }

           

                    {/* Display meal data if available */}
                    {Array.isArray(mealData) && mealData.length > 0 ? 
                            (
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
                            ) : ""}

                            {/* Display the detailed recipe if selected */}
                            {selectedRecipe && extractedRecipeData && (
                                <div className="mt-5 " >
                                   
                                    <Popup
                                        open={open}
                                        onClose={() => setOpen(false)}
                                        closeOnDocumentClick
                                        modal
                                        contentStyle={{
                                        maxWidth: "600px",
                                        width: "80%",
                                        padding: "20px",
                                        borderRadius: "10px",
                                        backgroundColor: "#fff",
                                        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
                                        }}
                                        overlayStyle={{
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        }}>
                                        <div className="modal-body" style={{ maxHeight: "400px", overflowY: "auto" }}>
                                            <h3 className="mb-3">{selectedRecipe.title}</h3>
                                            {/* Recipe Image */}
                                                <div className="mb-4">
                                                    <img
                                                        src={selectedRecipe.image}
                                                        alt={selectedRecipe.title}
                                                        className="img-fluid rounded"
                                                        
                                                    />
                                                </div>
                                            <div> {/* Ingredients List */}
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
                                        </div>
                                        
                                    </Popup>
                                   
                                </div>
                            )
                    }
                    
            </div>
                <div className="alert alert-danger mt-5">
                            <p>{error}</p> {/* Display the error message */}
                </div>
        </div>
    );
};

export default Searchrecipy;
