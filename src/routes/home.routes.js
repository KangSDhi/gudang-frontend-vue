import Home from '../components/home/pages/index.vue';
import Tentang from '../components/home/pages/tentang.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/tentang',
        component: Tentang
    }
];

export default routes;