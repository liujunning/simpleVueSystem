import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layouts from '@/components/layouts/layouts'
import IndexPage from '@/components/pages/index'


import DetailAnaPage from '@/components/pages/detail/analysis'
import DetailCouPage from '@/components/pages/detail/count'
import DetailForPage from '@/components/pages/detail/forecast'
import DetailPubPage from '@/components/pages/detail/publish'
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
      component: Layouts,
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
              }
            },{
              path: 'count',
              component: DetailCouPage
            },{
              path: 'forecast',
              component: DetailForPage
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
    }
  ]
})

let flag = true;

myrouters.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(store.state.count==6){   //登录拦截
      // next({
      //   path:'/login/',
      //   query: { redirect: to.fullPath }
      // })
      console.log('------------------')
      console.log(to)
      next()
    }else{
      next()
    }
  }else{
    next()
  }
})

export default myrouters;

