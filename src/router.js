import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Services from "./views/Services.vue";
import NotFound from "./views/NotFound.vue";
import ProductDetails from "./views/ProductDetails.vue";
import Products from "./views/Products.vue";

// API
import Posts from "./views/api/Posts.vue";
import Comments from "./views/api/Comments.vue";
import Stock from "./views/api/Stock.vue";
import Login from "./views/Login.vue";

const routes = [
    {path:'/', component: Posts},
    {path:'/login', component: Login},
    {path:'/comments', component: Comments},
    {path:'/stock', component: Stock},
    // { path: "/",
    //     name: "Home",
    //     component: Home
    // },
    // {
    //     path: "/products",
    //     name: "Products",
    //     component: Products
    // },
    // {
    //     path: "/about",
    //     name: "About",
    //     component: About
    // },
    // {
    //     path: "/services",
    //     name: "Services",
    //     component: Services
    // },
    // {
    //     path: "/product/:id",
    //     name: "ProductDetails",
    //     component: ProductDetails
    // },
    {
        path: '/:pathMatch(.*)*',
        name: "Not Found",
        component: NotFound
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router