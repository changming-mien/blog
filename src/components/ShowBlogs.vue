<template>
 <div v-theme:column="''" id="show-blogs">
   	<h2>博客总览</h2>
   	<div>
   		<input type="text" v-model="search" name="" value="search blogs" placeholder="search blogs">
   	</div>
   	<ul>
   		<router-link v-for="blog in filteredBlogs" tag="li" :to="'/blog/'+blog.id">
   			<h4 v-rainbow>{{blog.title|to-uppercase}}</h4>
   			<p>{{blog.body | snipet}}</p>
   		</router-link>
   	</ul>
 </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'show-blogs',
  data () {
    return {
    	blogs:[],
    	search:''
    }
  },
  created(){
  	axios.get('https://jsonplaceholder.typicode.com/posts')
    // axios.get('http://localhost:3005/users')
  		.then((res)=>{
        // this.blogs = res.data
  			this.blogs=res.data.slice(0,10)
  			// console.log(res.data)
  		})
  		.catch((error)=>{
  			console.log(error)
  		})
  },
  directives:{//局部自定义指令
  	"rainbow":{
  		bind(el,binding,vnode){
  			el.style.color='#'+Math.random().toString(16).slice(2,8)
  		}
  	}
  },
  computed:{
  	filteredBlogs(){
  		return this.blogs.filter((blog)=>{
  			return blog.title.match(this.search)
  		})
  	}
  },
  filters:{
  	toUppercase(value){
  		return value.toUpperCase()
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#show-blogs *{
	box-sizing: border-box;
}
#show-blogs{
	max-width: 800px;
	margin:20px auto;
}
#show-blogs h2{
	margin-bottom: 20px;
}
#show-blogs input[type="text"]{
	width: 100%;
	height: 40px;
	display: block;
	margin:20px 0;
	color: #666;
	outline: none;
	text-indent: 8px;
}
#show-blogs h4{
	font-weight: bold;
	padding-bottom: 6px;
	cursor: pointer;
}
#show-blogs ul{
	padding: 0;
	margin:0;
}
#show-blogs li{
	list-style: none;
	padding: 10px 18px;
	background-color: #eee;
	margin-bottom: 20px;
}
</style>
