import {createRouter, createWebHistory} from "vue-router";
import Index from './components/pages/index.vue'
import Recipes from './components/pages/recipes.vue'
import PageNotFound from './components/pages/404.vue'

const routes = [{
    path: "/",
    name: "Index",
    component: Index,
},
{
    path: "/recipes",
    name: "Recipes",
    component: Recipes,
},
{
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;