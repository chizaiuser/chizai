import Vue from 'vue'
import Router from 'vue-router'
import Toast from '@/components/czcompontent/toast'
import Toast1 from '@/components/czcompontent/toast1'
import Loading from '@/components/czcompontent/loading'
import Loading1 from '@/components/czcompontent/loading1'
import Showalert from '@/components/czcompontent/showalert'
import Acsheet from '@/components/czcompontent/acsheet'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'toast',
      component: Toast
    },
    {
      path: '/Toast1',
      name: 'toast',
      component: Toast1
    },
    {
      path: '/Loading',
      name: 'loading',
      component: Loading
    },
    {
      path: '/Loading1',
      name: 'loading1',
      component: Loading1
    },
    {
      path: '/Showalert',
      name: 'showalert',
      component: Showalert
    },
    {
      path: '/Acsheet',
      name: 'acsheet',
      component: Acsheet
    }
  ]
})
