import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import notifications from '../pages/Notifications.vue';
import Messages from '../pages/Messages.vue';
import Profile from '../pages/Profile.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/notifications', component: notifications },
    { path: '/Messages', component: Messages },
    { path: '/Profile', component: Profile },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;