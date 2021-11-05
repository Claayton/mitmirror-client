export default [
    {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "profile" */ './views/Profile.vue')
    }
]
