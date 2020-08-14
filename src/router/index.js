import Vue from 'vue'
import VueRouter from 'vue-router'
const index = ()=> import('views/Index.vue') 
const recommend = ()=> import('views/recommend/Recommend') 
const singer = ()=> import('views/singer/Singer') 
const songlist = ()=> import('views/songlist/Songlist') 
const news = ()=> import('views/new/New') 
Vue.use(VueRouter)

  const routes = [
  {
     path: '/',
    component: index,
    children: [
      { 
        path: '/recommend',
        component: recommend
      },
      { 
        path: '/singer',
        component: singer
      },
      { 
        path: '/songlist',
        component: songlist
      },
      { 
        path: '/new',
        component: news
      },
    ]
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
