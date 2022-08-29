import Vue from "vue";
import Vuex from "vuex";
import { usePreferredDark } from "@vueuse/core";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        bottomSheetModel: false,
        preferredDark: usePreferredDark()
    },
    mutations: {
        changeBottomSheetModel(state){
            state.bottomSheetModel = !state.bottomSheetModel;
        }
    },
    actions: {
    },
    modules: {
    }
})