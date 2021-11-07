import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
import Login from '@/components/Login'

import ChineseIndex from '@/components/Chinese/Index'
import ChineseCreate from '@/components/Chinese/CreateChinese'
import ChineseEdit from '@/components/Chinese/EditChinese'
import ChineseShow from '@/components/Chinese/ShowChinese'

import ReserveIndex from '@/components/Booking/Index'
import ReserveCreate from '@/components/Booking/CreateBook'
import ReserveEdit from '@/components/Booking/EditBook'
import ReserveShow from '@/components/Booking/ShowBook'

import MainUser from '@/components/MainUser'
import MainAdmin from '@/components/MainAdmin'

import Reserve from '@/components/Reserve'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [

    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    
    {
      path: '/reserve',
      name: 'reserve',
      component: Reserve
    },
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    
    {
      path: '/chineses',
      name: 'chineses',
      component: ChineseIndex
    },
    {
      path: '/chinese/create',
      name: 'chinese-create',
      component: ChineseCreate
    },
    {
      path: '/chinese/edit/:chineseId',
      name: 'chinese-edit',
      component: ChineseEdit
    },
    {
      path: '/chinese/:chineseId',
      name: 'chinese',
      component: ChineseShow
    },
    {
      path: '/books',
      name: 'books',
      component: ReserveIndex
    },
    {
      path: '/book/create',
      name: 'book-create',
      component: ReserveCreate
    },
    {
      path: '/book/edit/:reserveId',
      name: 'book-edit',
      component: ReserveEdit
    },
    {
      path: '/book/:bookId',
      name: 'book',
      component: ReserveShow
    },
    {
      path: '/MainUser',
      name: 'MainUser',
      component: MainUser
    },
    {
      path: '/MainAdmin',
      name: 'MainAdmin',
      component: MainAdmin
    },
   
  ]
})
