import Vue from 'vue'
import VueRouter from 'vue-router'
import Account from '../views/Account.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Questionnaire from '../views/Questionnaire.vue'
import Question from '../views/Question.vue'

Vue.use(VueRouter)

const routes = [
  
  
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  
  { path: '/questionnaire', component: Questionnaire,
  children:[
    {
      path: 'question',
      component: Question
    }
  ]
  },
{ path: '/account', component: Account,
  children :[
    {
      path: 'signin',
      component: SignIn
    }
    ,
    {
      path: 'signup',
      component: SignUp
    }
  ]
}
]

const router = new VueRouter({
  routes
})

export default router
