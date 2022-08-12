/*
 * @Description: 模块
 * @Author: pliybird
 * @LastEditors: pliybird
 * @Date: 2022-08-10 17:18:01
 * @LastEditTime: 2022-08-12 14:36:23
 */
import Vue from 'vue'
import App from './App'
// 导入uview
import uView from 'uview-ui'
// 导入i18n
import VueI18n from 'vue-i18n'
// 导入语言包
import zh from '@/common/locales/zh.js';
import en from '@/common/locales/en.js';
// 引入vuex
import store from '@/store';

Vue.config.productionTip = false
//使用uview
Vue.use(uView) 
//使用vue-i18n
Vue.use(VueI18n)

// 构造i18n对象
const i18n = new VueI18n({
	// 默认语言，这里的local属性，对应message中的zh、en属性
	locale: 'zh',
	// 引入语言文件
	messages: {
		// 要标识这里的语言属性，如：this.$i18n.locale = zh|en|zh|xxx
		'zh': zh, // 这里为上面通过import引入的语言包
		'en': en,
	}
})
// 由于微信小程序的运行机制问题，需声明如下一行，H5和APP非必填
Vue.prototype._i18n = i18n

// vuex混入
let vuexStore = require("@/store/$u.mixin.js");
Vue.mixin(vuexStore);


App.mpType = 'app'

const app = new Vue({
  i18n,
	store,
  ...App
})
// 引入请求封装，将app参数传递到配置中
require('@/common/config/request.js')(app)
app.$mount()
