const recipeDetails = document.querySelector("#recipe-details");

const url = new URLSearchParams(window.location.search);
const id = url.get("id");

async function getRecipe() {

    const { data, error } = await client
        .from("Recipe-sharing")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        console.log("Error:", error);
        return;
    }

    recipeDetails.innerHTML = `
        <h1>${data.title}</h1>

        <p>${data.description}</p>

        <p>
            Cooking Time: ${data.cooking_time} minutes
        </p>

        <p>
            Ingredients: ${data.ingredients}
        </p>

        <p>
            Instructions: ${data.instructions}
        </p>
    `;
}

getRecipe();