import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: "mdi"
    },
    theme: { 
        dark: false,
        themes:{
            light:{
                primary: '#0F335F',
                danger: '#D50000',
                warning: 'yellow',
                success: '#40916c'
            }
        }
    }
});
