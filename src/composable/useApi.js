import {ref} from "vue";

import axios from "axios";
import { advancePositionWithClone } from "@vue/compiler-core";


const cookingRecipes = ref();
const cookingRecipe = ref();

const api = axios.create({
    baseURL: "https://www.themealdb.com/api/json/v1/1/random.php"
});


export const useApi = () => {
    const getRecipes = async () => {
        const response = await api.get("cookingRecipe");
        cookingRecipes.value = response.data.meals;
    };

    const getRecipe = async (idMeal) => {
        
        const response = await api.get('cookingRecipe/${idMeal}');
        cookingRecipes.value = response.data;
    };
    getRecipes();

   return {cookingRecipes, cookingRecipe, getRecipes, getRecipe};
};