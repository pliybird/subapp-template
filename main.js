/*
 * @Description: 模块
 * @Author: pliybird
 * @LastEditors: pliybird
 * @Date: 2022-08-10 17:18:01
 * @LastEditTime: 2022-08-11 14:48:57
 */
import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'

Vue.config.productionTip = false
Vue.use(uView) //使用uview
App.mpType = 'app'

const app = new Vue({
  ...App

})
// 引入请求封装，将app参数传递到配置中
require('./config/request.js')(app)
app.$mount()
