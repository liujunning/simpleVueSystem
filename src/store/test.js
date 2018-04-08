import Vue from 'vue'
import Vuex from 'vuex'
import { mapState } from 'vuex'
Vue.use(Vuex)

import { SOME_MUTATION } from'./mutation-type.js'


const moduleA = {
    state:{
        count:[1,2,3],
        numb:9,
        todos:[
            { id:1,done:true,text:"uio"},
            { id:2,done:false,text:"zxc"},
            { id:3,done:true,text:"qwe"},
            { id:4,done:true,text:"fgh"},
            { id:5,done:false,text:"jkl"},
            { id:6,text:"byh"},
            { id:7,text:"tyuc"},
            { id:8,text:"fgg"},
        ],
        stArr:[32,3,34,1,2,55,567]
    },
    mutations:{
        incrementment( state,payload ){
            state.numb+= payload.amount;
        },
        reducement( state ){
            state.numb-- ;
        },
        [SOME_MUTATION](){
            state.numb+=10.98 
        }
    },
    getters:{
        doneTodosCount (state){
            return state.todos.filter(todo => todo.done)
        }
    },
    actions:{
        actionIncrement({ commit },value){
            setTimeout(()=>{
                commit('incrementment',value)
            },1)
            
        }
        
    }
}


// const state = {
//     count:[1,2,3],
//     numb:9,
//     todos:[
//         { id:1,done:true,text:"uio"},
//         { id:2,done:false,text:"zxc"},
//         { id:3,done:true,text:"qwe"},
//         { id:4,done:true,text:"fgh"},
//         { id:5,done:false,text:"jkl"},
//         {id:6,text:"byh"},
//         {id:7,text:"tyuc"},
//         {id:8,text:"fgg"},
//     ],
//     stArr:[32,3,34,1,2,55,567]
// }


// const getters ={
//     doneTodosCount (state){
//         return state.todos.filter(todo => todo.done)
//     }
// }




// const mutations = {
//     incrementment( state,payload ){
//         state.numb+= payload.amount;
//     },
//     reducement( state ){
//         state.numb-- ;
//     },
//     [SOME_MUTATION](){
//         state.numb+=10.98 
//     }
// }

// const actions = {
//     actionIncrement({ commit },value){
//         setTimeout(()=>{
//             commit('incrementment',value)
//         },1)
        
//     }
    


// }

// const store = new Vuex.Store({
//     state,
//     getters,
//     actions,
//     mutations
// })

const store = new Vuex.Store({
    modules:{
        a:moduleA
    }
})
store.state.a
export default store;







