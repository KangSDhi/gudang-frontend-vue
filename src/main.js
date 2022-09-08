import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import 'flowbite'
import './index.css'

//routes
import HomeRoutes from './routes/home.routes';
import KategoriRoutes from './routes/kategori.routes';

const routes = [
    ...HomeRoutes,
    ...KategoriRoutes
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);

app.use(router);

app.mount('#app');
