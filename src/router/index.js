import {
  createRouter,
  createWebHashHistory,
  createWebHistory
} from "vue-router"
import View from "../pages/view/index.vue"
import HomePage from "../pages/home/index.vue"
import GoodsManger from "../pages/goodsManger/index.vue"
import UserManger from "../pages/userManger/index.vue"

const routes = [{
    path: '/',
    component: HomePage
  },
  {
    path: '/view',
    component: View
  }, {
    path: '/homePage',
    component: HomePage
  }, {
    path: '/goodsManger',
    component: GoodsManger
  }, {
    path: '/userManger',
    component: UserManger
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
export default router