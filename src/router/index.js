import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import Success from '../views/Success.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'product',
    component: Product
  },
  {
    path: '/ShoppingCart',
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  {
    path: '/Success',
    name: 'Success',
    component: Success
  }
]

const router = new VueRouter({
  routes
})

export default router
