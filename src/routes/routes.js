import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: '',
    base: document.querySelector('#app').getAttribute('data-path') || '/',
    scrollBehavior: () => ({y: 0}),
    routes: [
        {
            path: '/',
            name: 'Orkestra',
            redirect: '/home',
            component: () => import('@/containers/Orkestra.vue'),
            children:[
                {
                    path: '/home',
                    name: 'Home',        
                    component: () => import('@/views/Home.vue'),
                }
            ]
        },
    ]
});  

// if(role.name=='super_administrador'){
// }

export default router;
