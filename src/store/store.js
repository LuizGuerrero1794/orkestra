import Vue from 'vue'
import Vuex from 'vuex'

import orkestra from './orkestra/store'

Vue.use(Vuex)

const vx = new Vuex.Store({
    modules: {
        orkestra: orkestra,
    }
})

export default vx;
