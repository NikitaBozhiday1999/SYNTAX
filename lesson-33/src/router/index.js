import Vue from 'vue'
import VueRouter from 'vue-router'

import StudentInfo from '@/views/StudentInfo.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/students/:id', component: StudentInfo }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes,
});

export default router;