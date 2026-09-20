// ================= SUPABASE =================

// IMPORTANT:
// Yahan apna already wala Supabase URL aur Key use karein.

const supabaseUrl = "https://asshuqbgftvjljxhchxj.supabase.co";
const supabaseKey = "sb_publishable_BICPLh3XKfM2WFlN7zxlrg_JzQLMgSd";

const client = supabase.createClient(
    supabaseUrl,
    supabaseKey
);


// ================= FORM =================

const recipeForm =
    document.querySelector("#recipe-form");


const message =
    document.querySelector("#message");


const submitBtn =
    document.querySelector("#submit-btn");



// ================= SUBMIT =================

recipeForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        // Get values

        const title =
            document.querySelector("#title")
            .value
            .trim();


        const category =
            document.querySelector("#category")
            .value;


        const description =
            document.querySelector("#description")
            .value
            .trim();


        const cookingTime =
            document.querySelector("#cooking_time")
            .value;


        const ingredients =
            document.querySelector("#ingredients")
            .value
            .trim();


        const instructions =
            document.querySelector("#instructions")
            .value
            .trim();



        // Button loading

        submitBtn.disabled = true;


        submitBtn.innerHTML = `
            <span class="spinner-border spinner-border-sm me-2"></span>
            Creating Recipe...
        `;



        // Save to Supabase

        const { data, error } = await client

            .from("Recipe-sharing")

            .insert([
                {
                    title: title,
                    category: category,
                    description: description,
                    cooking_time: cookingTime,
                    ingredients: ingredients,
                    instructions: instructions
                }
            ])

            .select();



        // Error

        if (error) {

            console.log("Error:", error);


            message.innerHTML = `
                <div class="alert alert-danger">

                    <i class="bi bi-exclamation-circle me-2"></i>

                    Recipe could not be created.
                    Please try again.

                </div>
            `;


            submitBtn.disabled = false;


            submitBtn.innerHTML = `
                <i class="bi bi-plus-circle"></i>
                Create Recipe
            `;


            return;
        }



        // Success

        message.innerHTML = `
            <div class="alert alert-success">

                <i class="bi bi-check-circle-fill me-2"></i>

                Recipe created successfully!

            </div>
        `;



        // Clear form

        recipeForm.reset();



        // Change button

        submitBtn.innerHTML = `
            <i class="bi bi-check-circle-fill"></i>
            Recipe Created
        `;



        // Dashboard

        setTimeout(function () {

            window.location.href =
                "dashboard.html";

        }, 1500);

    }
);