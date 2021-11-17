<script setup>
import {useApi} from "/src/composable/useApi"
const {cookingRecipes, getRecipes} = useApi();
</script>
<template>
<h1 class="text-yellow-800 text-5xl text-center bg-purple-200">Home</h1>
<div class="container mx-auto text-red-700">
<div ><img class="px-80 py-3" src="https://media.istockphoto.com/photos/on-colourful-speech-bubbles-picture-id180819641?b=1&k=20&m=180819641&s=170667a&w=0&h=CX51cRVofQl95e_cu9Bfy5PLZQ1WdsqmJ-NCFzU96UI="></div>
<div class="text-center text-red-900">
    <h3 class="text-4xl ">Welcome to the Cooking Recipes site. You will be able to access the best recipes in the world. Youtube videos included(NOTE:Videos could go down at any time)</h3>
    <h1 class="py-5 text-6xl">Good luck cooking!</h1>
</div>
<div class="py-10">
   <button @click="getRecipes" class="w-full h-14 bg-blue-500 text-black hover:bg-blue-900 hover:text-red-400 mt-7 px-8 rounded-t-lg">Generate New Recipe</button>
</div>
    <ul class="bg-indigo-300 rounded-lg">
        <li v-for="cookingRecipe in cookingRecipes" :key="cookingRecipe.idMeal" >
            <div>
                <router-link to="/recipes" class="w-full text-black bg-blue-600 hover:bg-blue-300 rounded-lg cursor-pointer hover:scale-95">Show More recipes</router-link>
                <h3 class="text-4xl py-8">Dish: {{cookingRecipe.strMeal}}</h3>
                <p class="text-xl py-8">Summary: {{cookingRecipe.strInstructions}}</p>
                <p class="text-xl py-8">ingredients: {{cookingRecipe.strIngredient1}}, {{cookingRecipe.strIngredient2}}, {{cookingRecipe.strIngredient3}}, {{cookingRecipe.strIngredient4}}, {{cookingRecipe.strIngredient5}}, {{cookingRecipe.strIngredient6}}, {{cookingRecipe.strIngredient7}}, {{cookingRecipe.strIngredient8}}, {{cookingRecipe.strIngredient9}}, {{cookingRecipe.strIngredient10}}, {{cookingRecipe.strIngredient11}}, {{cookingRecipe.strIngredient12}}, {{cookingRecipe.strIngredient13}}, {{cookingRecipe.strIngredient14}}, {{cookingRecipe.strIngredient15}}, {{cookingRecipe.strIngredient16}}, {{cookingRecipe.strIngredient17}}, {{cookingRecipe.strIngredient18}}, {{cookingRecipe.strIngredient19}}, {{cookingRecipe.strIngredient20}}</p>
                <p>MeasureMents: {{cookingRecipe.strMeasure1}}, {{cookingRecipe.strIngredient1}}, {{cookingRecipe.strMeasure2}}, {{cookingRecipe.strIngredient2}}, {{cookingRecipe.strMeasure3}}, {{cookingRecipe.strIngredient3}}, {{cookingRecipe.strMeasure4}}, {{cookingRecipe.strIngredient4}}, {{cookingRecipe.strMeasure5}}, {{cookingRecipe.strIngredient5}}, {{cookingRecipe.Measure6}}, {{cookingRecipe.strIngredient6}}, {{cookingRecipe.strMeasure7}}, {{cookingRecipe.strIngredient7}}, {{cookingRecipe.strMeasure8}}, {{cookingRecipe.strIngredient8}}, {{cookingRecipe.strMeasure9}}, {{cookingRecipe.strIngredient9}}, {{cookingRecipe.strMeasure10}}, {{cookingRecipe.strIngredient10}}, {{cookingRecipe.strMeasure11}}, {{cookingRecipe.strIngredient11}}, {{cookingRecipe.strMeasure12}}, {{cookingRecipe.strIngredient12}}, {{cookingRecipe.strMeasure13}}, {{cookingRecipe.strIngredient13}}, {{cookingRecipe.strMeasure14}}, {{cookingRecipe.strIngredient14}}, {{cookingRecipe.strMeasure15}}, {{cookingRecipe.strIngredient15}}, {{cookingRecipe.Measure16}}, {{cookingRecipe.strIngredient16}}, {{cookingRecipe.strMeasure17}}, {{cookingRecipe.strIngredient17}}, {{cookingRecipe.strMeasure18}}, {{cookingRecipe.strIngredient18}}, {{cookingRecipe.strMeasure19}}, {{cookingRecipe.strIngredient19}}, {{cookingRecipe.strMeasure20}}, {{cookingRecipe.strIngredient20}}</p>
                <p v-if="cookingRecipe.strYoutube" class="text-xl py-8">Youtube Video(Copy and paste link): {{cookingRecipe.strYoutube}}</p>
                <p v-if="cookingRecipe.strSource" class="text-xl py-8">Link to Recipe: {{cookingRecipe.strSource}}</p>
            </div>
        </li>
    </ul>

</div>
</template>
