import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Cart from '@/pages/Cart'

import Demo from '@/pages/Demo'

// Admin Components
import Index from '@/pages/admin/Index'
import New from '@/pages/admin/New'
import Products from '@/pages/admin/Products'
import Edit from '@/pages/admin/Edit'

// ImageCOlor 图片背景色获取设置
import ImageColor from '@/pages/imageColor/Index'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      // name: 'Admin',
      component: Index,
      children: [{
          path: 'new',
          name: 'New',
          component: New
        },
        {
          path: '',
          name: 'Products',
          component: Products
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit
        }
      ]
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/Demo',
      name: 'Demo',
      component: Demo
    },
    { // 根据图片获取图片主颜色 设置背景色等
      path: '/ImageColor',
      name: 'ImageColor',
      component: ImageColor
    }
  ]
})
