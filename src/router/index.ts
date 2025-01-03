import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/UserLogin.vue')
    },
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/hospital/home',
      children: [
        {
          path: '/hospital/user',
          component: () => import('@/views/user/UserHome.vue')
        },
        {
          path: '/hospital/helper',
          component: () => import('@/views/help/UserHelper.vue')
        },
        {
          path:'/hospital/home',
          component:() => import('@/views/home/MainHome.vue')
        }
      ]
    }
  ],
  scrollBehavior(){
    return{
      left:0,
      top:0
    }
  }
})

export default router
