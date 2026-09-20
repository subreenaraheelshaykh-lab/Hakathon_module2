const supabaseKey = "sb_publishable_BICPLh3XKfM2WFlN7zxlrg_JzQLMgSd"
const supabaseUrl = "https://asshuqbgftvjljxhchxj.supabase.co"

const{createClient} = supabase
const client = createClient(supabaseUrl, supabaseKey)

console.log(client);


const recipesContainer = document.querySelector("#recipes-container");

async function getRecipes() {

    const { data, error } = await client
        .from("Recipe-sharing")
        .select("*");

    if (error) {
        console.log("Error:", error);
        return;
    }

    recipesContainer.innerHTML = "";

data.forEach(recipe => {
    recipesContainer.innerHTML += `
        <div class="recipe-card">
            <h2>${recipe.title}</h2>
            <p>${recipe.description}</p>
            <p>Cooking Time: ${recipe.cooking_time} minutes</p>
            <a href="recipe-details.html?id=${recipe.id}">View Recipe</a>
        </div>
    `;
});
}

getRecipes();

 const search = document.querySelector("#search");

search.addEventListener("input", async () => {

    const searchValue = search.value.toLowerCase();

    const { data, error } = await client
        .from("Recipe-sharing")
        .select("*");

    if (error) {
        console.log(error);
        return;
    }

    const filteredRecipes = data.filter(recipe =>
        recipe.title.toLowerCase().includes(searchValue)
    );

    recipesContainer.innerHTML = "";

    filteredRecipes.forEach(recipe => {

        recipesContainer.innerHTML += `
            <div class="recipe-card">

                <h2>${recipe.title}</h2>

                <p>${recipe.description}</p>

                <p>Cooking Time: ${recipe.cooking_time} minutes</p>
                <a href="recipe-details.html?id=${recipe.id}">View Recipe</a>

            </div>
        `;

    });

});