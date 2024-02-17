// Function to display recipes on the page
function displayRecipes() {
    const recipeContainer = document.getElementById('recipe-container');
    recipeContainer.innerHTML = '';

    // Retrieve recipes from localStorage (in a real scenario)
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

    storedRecipes.forEach((recipe) => {
        const link=document.createElement("a")
        link.setAttribute("href",`recipe-details.html?id=${recipe.id}`)
        const card = document.createElement('div');
        card.classList.add('recipe-card');

        const title = document.createElement('h2');
        title.textContent = recipe.title;

        const categories = document.createElement('p');
        categories.textContent = `Categories: ${recipe.categories.join(', ')}`;

        card.appendChild(title);
        card.appendChild(categories);
        link.appendChild(card)
        recipeContainer.appendChild(link);
        
    });
}

// Initial display of recipes when the page loads
window.onload = displayRecipes;
