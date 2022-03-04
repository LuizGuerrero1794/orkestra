require("@/plugins/bootstrap");

import Vue from 'vue'
import store from "@/store/store";
import vuetify from "@/plugins/vuetify";
import axios from '@/plugins/axios'
import VueAxios from 'vue-axios'
import App from '@/App';
import router from '@/routes/routes'


Vue.use(VueAxios, axios)

new Vue({
    store, 
    vuetify,
    router,
    render: h => h(App),
}).$mount('#app')