import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/WelcomePage'
import Chatroom from '../views/ChatroomPage'
import useValidate from '../auth/validate'

const { error, validate } = useValidate()
// eslint-disable-next-line no-unused-vars
const requireAuth = async (to, from, next) => {
  const uid = window.localStorage.getItem('uid')
  const client = window.localStorage.getItem('client')
  const accessToken = window.localStorage.getItem('access-token')

  if (!uid || !client || !accessToken) {
    console.log('ログインしていません')
    next({ name: 'WelcomePage' })
    return
  }

  await validate()

  if (error.value) {
    console.log('認証に失敗しました')
    next({ name: 'Welcome' })
  } else {
    next()
  }
}
const noRequireAuth = async (to, from, next) => {
  const uid = window.localStorage.getItem('uid')
  const client = window.localStorage.getItem('client')
  const accessToken = window.localStorage.getItem('access-token')

  if (!uid && !client && !accessToken) {
    next()
    return
  }

  await validate()

  if (!error.value) {
    next({ name: 'ChatroomPage' })
  } else {
    next()
  }
}
const routes = [
  {
    path: '/',
    name: 'WelcomePage',
    component: Welcome,
    beforeEnter: noRequireAuth
  },
  {
    path: '/chatroom',
    name: 'ChatroomPage',
    component: Chatroom,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router