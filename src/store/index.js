import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        bottomSheetModel: false
    },
    mutations: {
        toggleBottomSheetModel(state){
            state.bottomSheetModel = !state.bottomSheetModel;
        }
    },
    actions: {
    },
    modules: {
    }
})
