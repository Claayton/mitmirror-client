import { routes as profile } from '../modules/profile'
import { routes as auth } from '../modules/auth'
import { routes as home } from '../modules/home'

export default [
    ...home,
    ...auth,
    ...profile,
  ]
