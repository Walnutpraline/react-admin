import Home from '../pages/home';
import Login from '../pages/login';
const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        requiresAuth: true,
    },
    {
        path: '/login',
        exact: true,
        component: Login,
    },
]
export default routes;