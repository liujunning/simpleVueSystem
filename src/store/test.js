import Vue from 'vue'
import Vuex from 'vuex'
import { mapState } from 'vuex'
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
// let jcVal = window.sessionStorage.setItem("moki",5);
// let mark = window.sessionStorage.getItem("moki")
const state = {
    count:[1,2,3],
    numb:9
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



const actions = {
    
}

const store = new Vuex.Store({
    state,
    getters,
    mutations
})
export default store;







