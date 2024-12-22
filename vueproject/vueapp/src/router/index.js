import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";


const routes = [
    { path: '/', component: HomePage },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// export default new router;

// ({
//     mode: 'history', 
//     routes: [
//         {
//             path: '/', 
//             name: 'HomePage',
//             component: HomePage
//         },
//         {
//             path: '/create-user',
//             name: "CreateUser",
//             component: CreateUser
//         }
//     ]
// });