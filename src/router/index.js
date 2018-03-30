import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layouts from '@/components/layouts/layouts'
import IndexPage from '@/components/pages/index'


import DetailAnaPage from '@/components/pages/detail/analysis'
import DetailCouPage from '@/components/pages/detail/count'
//import DetailForPage from '@/components/pages/detail/forecast'


import DetailPubPage from '@/components/pages/detail/publish'

import tuhua from '@/components/tuhua'
Vue.use(Router)
import store from '../store/test.js';
const myrouters = new Router({
  mode:'history',
  routes: [
    {
      path:'/login',
      name:'login',
      component:() => import ('@/components/truthLogin'),
    },
    {
      path: '/',
      name: 'Layouts',
      component:Layouts,
      // components:{
      //   default:Layouts,
      //   Layouts:Layouts,
      //   HelloWorld:HelloWorld
      // } ,
      redirect:'/IndexPage',
      meta:{
        requireAuth: true,
      },
      children:[
        {
          path:'/detail',
          component:()=>import ('@/components/pages/detail'),
          meta:{
            requiresAuth: true,
            key:"百世",
            auth:true,
            tag:true
          },
          children:[
            {
              path: 'analysis',
              component: DetailAnaPage,
              meta:{
                requiresAuth: true,
                key:"神明",
                auth:true,
                tag:true
              },
              props:true
            },{
              path: 'count',
              components: {
                default:DetailCouPage,
                DetailCouPageJack:DetailCouPage,
                HelloWorld:HelloWorld
              }
            },{
              path: 'forecast',
              component: resolve=>require(["@/components/pages/detail/forecast"],resolve)
            },{
              path: 'publish',
              component: DetailPubPage
            }
          ]
        },{
          path:'/IndexPage',
          component:IndexPage,
          meta:{
            requiresAuth: true,
            key:"asdsd",
            auth:true,
            tag:true
          }
        }
      ]
    },
    {
      path:'/tuhua',
      name:'tuhuaList',
      component:tuhua
    },{
      path:'/HelloWorld',
      component:HelloWorld
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    console.log(savedPosition)
    if (savedPosition) {
     // return savedPosition
    } else {
      //return { x: 0, y: 0 }
    }
  }
})

let flag = true;

myrouters.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(store.state.count==6){   //登录拦截
      // next({
      //   path:'/login/',
      //   query: { redirect: to.fullPath }
      // })
      next()
    }else{
      next()
    }
  }else{
    next()
  }
})




export default myrouters;

