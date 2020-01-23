import Vue from 'vue'
import VueRouter from 'vue-router'

import StudentInfo from '@/views/StudentInfo.vue'
import Students from '@/views/Students.vue'
import Home from '@/views/Home.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/syntax-students',
        name: 'syntax-students',
        component: Students,
        children: [
            {
                path: '/syntax-students/:id',
                components: {
                default: Students,
                content: StudentInfo
                },
                name: 'student'
            },
        ]
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes,
});

export default router;