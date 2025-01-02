import { useState } from "react";
import Sidebar from "../elements/Navbar";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Navbar from "../elements/Navbar";
import Footer from "../elements/Footer";

const Searchrecipy = () => {
    const [mealData, setMealData] = useState([]);  // Initialize as an empty array for random recipes
    const [allRecipes, setAllRecipes] = useState([]);  // New state to store all 25 recipes
    const [recipes, setRecipes] = useState("");  // Default as empty string for user input
    const [recipeNumbers, setRecipeNumbers] = useState(0);  // Default as 0
    const [selectedRecipe, setSelectedRecipe] = useState(null);  // State to hold the selected recipe details
    const [extractedRecipeData, setExtractedRecipeData] = useState(null);  // State for the extracted data
    const [isClicked, setIsClicked] = useState(false);  // State to track if a recipe is clicked
    const [isLoading, setIsLoading] = useState(false);  // State to track loading state
    const [open, setOpen] = useState(false);
    const [error, setError] = useState("");  // To store error messages

    // Handle input change for ingredients
    function handleIngredientsChange(e) {
        setRecipes(e.target.value);
    }

    // Handle input change for number of recipes
    function handleNumberChange(e) {
        setRecipeNumbers(e.target.value);
    }

    // Fetch meal data from API
    async function getMealData() {
        setIsClicked(true);  // Set isClicked to true to indicate that the recipe is clicked
        setIsLoading(true);  // Show loading state

        // Validate inputs for ingredients and number of recipes
        if (!recipes.trim() || !recipeNumbers || recipeNumbers <= 0) {
            setError("Please enter valid ingredients and a valid number of recipes.");
            setIsLoading(false); // Hide loading if inputs are invalid
            return;
        }

        // Check if we've already fetched results for the same ingredients
        if (allRecipes.length > 0 && recipes === allRecipes[0].ingredients) {
            console.log("Using previously fetched results");
            setMealData(getRandomRecipes(allRecipes, 4)); // Select 4 random recipes from the stored 25
            setIsLoading(false);  // Hide loading when data is ready
            return;
        }

        try {
            // Fetch data from the API using the ingredients and number
            const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${recipes}&number=25&apiKey=2940e997aaab4a28bbb4b6560d0477b2`);
            const data = await response.json();

            if (Array.isArray(data) && data.length > 0) {
                setAllRecipes(data);  // Store the fetched 25 recipes in the new state
                setMealData(getRandomRecipes(data, recipeNumbers));  // Select random recipes
                setError("");  // Clear error message if the fetch is successful
            } else {
                setError("No recipes found. Please check the ingredients.");
                setMealData([]);  // If data is not an array or is empty, set mealData to an empty array
            }
        } catch (error) {
            console.log("Error fetching meal data.");
            setMealData([]);  // Set to empty array in case of an error
            setError("Error fetching meal data. Please try again later.");
        } finally {
            setIsLoading(false);  // Hide loading when the fetch is complete (success or error)
        }
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
    async function handleRecipeClick(meal) {
        setOpen(true);  // Set isClicked to true to indicate that the recipe is clicked
        setSelectedRecipe(meal);  // Set the clicked recipe to show more details
        
        try {
            // Fetch additional data using the extract endpoint
            const response = await fetch(`https://api.spoonacular.com/recipes/${meal.id}/information?includeNutrition=false&apiKey=2940e997aaab4a28bbb4b6560d0477b2`);
            const data = await response.json();
            setExtractedRecipeData(data);  // Store extracted data
            console.log("Extracted Data:", data);
        } catch (error) {
            console.error("Error fetching extracted data:", error);
        }
    }

    return (
        <div>
            <Navbar/>
            <div className={`embed-responsive embed-responsive-16by9 `} style={{ position: 'relative' }}>
                    <video
                        className={`embed-responsive-item d-flex m-0 ${isClicked ? 'rounded-bottom-circle' : ''}`}
                        autoPlay
                        muted
                        loop
                        style={{height: isClicked ? '600px' : '100vh',objectFit: 'cover',width:'100%',filter:'blur(5px)' }}
                        
                    >
                        <source src="/videos/video2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                 {/* Text Overlay */}
                <div className="position-absolute top-50 start-50 translate-middle text-center text-white"style={{zIndex: 2,}}>
                            <div className="container mt-4 mb-5">
                                <section className="controls" style={{ marginTop: isClicked ? '200px' : '240px', marginBottom:'240px'}}>
                                    {/* Ingredients input */}
                                    <div className="row">
                                        <div className="col-sm-1"></div>
                                        <div className="col-sm-10 mb-4 mt-5 text-light text-center">
                                            <h1>Enter the <a href="" style={{color:'white',textDecoration:'none'}}>Ingredient</a> you have & </h1>
                                            <h1>select number of <a href="" style={{color:'white',textDecoration:'none'}}>Recipy</a>  you want</h1>
                                        </div>
                                        <div className="col-sm-1"></div>
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

                                    <button className="btn mx-auto d-block mt-4" onClick={getMealData} style={{backgroundColor:'white', color:'rgb(75, 18, 76)'}}> <b> Get Recipe</b></button>
                                </section>     
                            </div>
                </div>
            </div>

            

            <div className="ms-5 me-5">
                {/* Display an error message if there is an error */}
                {error && (
                    <div className="alert alert-danger mt-5">
                        <p>{error}</p> {/* Display the error message */}
                    </div>
                )}

                {/* Display loading spinner when fetching data */}
                {isLoading && !error && (
                    <div className="text-center mt-5">
                        <div className="spinner-border text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p>Loading, please wait...</p>
                    </div>
                )}

                {/* Display meal data if available */}
                {Array.isArray(mealData) && mealData.length > 0 && !isLoading ? (
                    <div className="mt-4">
                        <h3 className="mb-4">Meal Results:</h3>
                        <div className="row">
                            {mealData.map((meal, index) => (
                                <div className="col-md-4 mb-4" key={index}>
                                    <div className="card" onClick={() => handleRecipeClick(meal)} style={{ cursor: 'pointer',backgroundColor:'#4B124C',color:'white' }}>
                                        <div className="card-head">
                                         <img src={meal.image} alt={meal.title} className="card-img-top" />
                                        </div>
                                        <div className="card-body" >
                                            <h5 className="card-title">{meal.title}</h5>
                                            <p className="card-text">Click for more details</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : ""}
            </div>

            {/* Popup for Recipe Details */}
            <div className="mt-5">
                {selectedRecipe && extractedRecipeData && (
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
                        }}
                    >
                        <div className="modal-body" style={{ maxHeight: "400px", overflowY: "auto" }}>
                            <h3 className="mb-3">{selectedRecipe.title}</h3>
                            <div className="mb-4">
                                <img
                                    src={selectedRecipe.image}
                                    alt={selectedRecipe.title}
                                    className="img-fluid rounded"
                                />
                            </div>
                            <div>
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
                                            <p className="card-text" dangerouslySetInnerHTML={{ __html: extractedRecipeData.instructions }}></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Popup>
                )}
            </div>
         <Footer/>
        </div>
    );
};

export default Searchrecipy;
