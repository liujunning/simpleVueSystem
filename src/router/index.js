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
const myrouters = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Layouts',
      component: Layouts,
      redirect:'/IndexPage',
      children:[
        {
          path:'/detail',
          component:()=>import ('@/components/pages/detail'),
          children:[
            {
              path: 'analysis',
              component: DetailAnaPage
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
          component:IndexPage
        }
      ]
    }
  ]
})
export default myrouters
