export default [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "home" */ './views/Login.vue')
  },
  {
    path: '/login/forgetpassword',
    name: 'ForgetPassword',
    component: () => import(/* webpackChunkName: "forgetpassword" */ './views/ForgetPassword.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ './views/Register.vue')
  }
]
