let ingredientList = [];
let filteredRecipe = [];
let mealRecipe = [];
const dropDown = document.querySelector('#ingre');
const recipeList = document.querySelector('#recipeList');
const recipeDetail = document.querySelector('#recipeDetail');
const recipeMessage = document.querySelector('#recipeMessage')

//get the list of ingredient from database. 
const getIngredients  = async() =>{
    const responce = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
    if(responce.ok){
        const data = await responce.json();
        ingredientList = data.meals;
    }
    setList(ingredientList);
}

//create "option" element and append all the elements to "select" tag.
const setList = list => {
    list.forEach(ingredient => {
        let option = document.createElement('option');
        option.setAttribute('value', `${ingredient.strIngredient}`);
        option.textContent = `${ingredient.strIngredient}`;
        dropDown.appendChild(option);
    });
}

//reset method. Clear all the contents below the buttons.
const reset = () =>{
    recipeList.innerHTML = "";
    recipeDetail.innerHTML = "";
    recipeMessage.innerHTML = "";
}

//Upon "select", get a filtered list from database
const getFilteredList = async() => {
    let ingredient = document.querySelector('#ingre').value;
    const responce = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    if (responce.ok){
        const data  = await responce.json();
        filteredRecipe = data.meals;
    }
    displayRecipeList(filteredRecipe);
}

//display the filtered recipe list. each image is given same class id to act as button.
//
const displayRecipeList = list =>{
    reset();
    let message = document.createElement('h3');
    message.textContent = "Click image to see the details";
    recipeMessage.appendChild(message);
    list.forEach(recipe => {
        let article = document.createElement('article');
        let h4 = document.createElement('h4');
        h4.textContent = recipe.strMeal;
        let img = document.createElement('img');
        img.setAttribute('src', `${recipe.strMealThumb}`);
        img.setAttribute('alt', `${recipe.strMeal}`);
        img.className = 'recipeImage';
        img.id = `${recipe.idMeal}`;
        article.appendChild(h4);
        article.appendChild(img);
        recipeList.appendChild(article);
    })
    document.querySelectorAll('.recipeImage').forEach((recipe) =>{
        recipe.addEventListener("click", getRecipe);
    })

}


//get a random recipe from database. 
const getRandom = async() =>{
    const responce = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    if(responce.ok){
        const data = await responce.json();
        mealRecipe = data.meals;
    }
    displayRecipe(mealRecipe);

}

//get details of recipe when a image from the filtered rcipe list is clicked.
const getRecipe = async(e) => {
    let id = e.target.getAttribute("id");
    const responce = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    if(responce.ok){
        const data = await responce.json();
        mealRecipe = data.meals;
    }
    displayRecipe(mealRecipe);
}

//display details of recipe. 
//if confition: give a YouTube link of the recipe has one. 
const displayRecipe = recipeD =>{
    reset();
    let recipe = recipeD[0];
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    h2.textContent = `${recipe.strMeal}`;
    article.appendChild(h2);
    let img = document.createElement('img');
    img.setAttribute('src', `${recipe.strMealThumb}`);
    img.setAttribute('alt', `${recipe.strMeal}`);
    if (recipe.strYoutube != ""){
        let guide = document.createElement('p');
        guide.innerHTML = "Watch the steps on ";
        let youTube = document.createElement('a');
        youTube.setAttribute('href', `${recipe.strYoutube}`);
        youTube.innerHTML  = "YouTube";
        guide.appendChild(youTube);
        article.appendChild(guide);
    }
    let instructions = document.createElement('p');
    let inst = `${recipe.strInstructions}`;
    inst = inst.replace(/\r?\n/g, '<br>');
    instructions.innerHTML = `${inst}`;
    article.appendChild(img);
    article.appendChild(instructions);
    recipeDetail.appendChild(article);
}

//add event listener to the drop down list, and random button
document.querySelector("#ingre").addEventListener("change", () => {getFilteredList()});
document.querySelector('#random').addEventListener('click', () => getRandom());

getIngredients();