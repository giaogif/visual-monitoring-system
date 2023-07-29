import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import ECharts from 'vue-echarts'
import 'echarts'
import Cookies from 'js-cookie'
import VueCookies from 'vue-cookies';
import request from './utils/request'

Vue.component('v-chart', ECharts)
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueCookies);
Vue.prototype.request = request


//全局前置导航守卫
router.beforeEach((to, from, next) => {
  //判断token存不存在
  const token = Cookies.get('token')
  //token不存在,说明当前用户是未登录，应该跳转至登录页
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if (token && to.name === 'login') {
    //token存在,说明用户登录,此时跳转至首页
    next({ name: 'rtmonitor' })
  } else {
    next();
  }
})

new Vue({
  router,
  render: h => h(App)//把render函数指定的组件渲染到HTML页面中，h是createElement函数
}).$mount('#app') //等同于el：'#app' 
