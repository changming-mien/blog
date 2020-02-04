import Vue from 'vue'
import Router from 'vue-router'
import HeaderBlog from '@/components/HeaderBlog'
import ShowBlogs from '@/components/ShowBlogs'
import AddBlog from '@/components/AddBlog'
import SingleBlog from '@/components/SingleBlog'
Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
		path: '/',
		name: 'ShowBlogs',
		component: ShowBlogs
	}, {
		path: '/addblog',
		name: 'AddBlog',
		component: AddBlog
	}, {
		path: '/blog/:id',
		name: 'SingleBlog',
		component: SingleBlog
	}]
})