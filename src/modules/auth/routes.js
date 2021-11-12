export default [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "home" */ './views/Login.vue')
  },
  {
    path: '/login/forgetpassword',
    name: 'forgetPassword',
    component: () => import(/* webpackChunkName: "forgetpassword" */ './views/ForgetPassword.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ './views/Register.vue')
  }
]
