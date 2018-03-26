import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// const store = new Vuex.Store({
//     state:{
//         count:0
//     },
//     mutations:{
//         increment(state){
//             state.count++;
//         }
//     }
// })

const state = {
    count:6
}


const  getters = {
    count(state){
        return state.count
    }
}





const mutations = {
    incrementment(state){
        state.count++;
    },
    reducement(state){
        state.count--;
    }
}



const store = new Vuex.Store({
    state,
    getters,
    mutations
})
export default store;







