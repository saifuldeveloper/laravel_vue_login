import {
    createWebHashHistory,
    createRouter
} from 'vue-router';
import Home from './pages/home.vue';
import Login from './pages/login.vue';
import Register from './pages/register.vue';
import dashboard from './pages/dashboard.vue';



const routes = [{
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: dashboard,
        meta: {
            requiresAuth: true
        }

    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !localStorage.getItem('token')) {
        return {
            name: 'login'
        }
    }
    if (to.meta.requiresAuth == false && localStorage.getItem('token')) {
        return {
            name: 'Dashboard'
        }

    }
});


export default router;