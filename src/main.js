// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
// Vue.use(axios)
Vue.prototype.axios = axios
// 自定义指令
Vue.directive('theme', {
	bind(el, binding, vnode) {
		if (binding.value == "wide") {
			el.style.maxWidth = '1260px'
		} else {
			el.style.maxWidth = '800px'
		}
		if (binding.arg == 'column') {
			el.style.background = "#669977"
			el.style.padding = "10px"
		}
	}
})
// 自定义过滤器
// Vue.filter("to-uppercase", function(value) {
// 	return value.toUpperCase()
// })
Vue.filter("snipet", (value) => {
	return value.slice(0, 200) + "..."
})
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})