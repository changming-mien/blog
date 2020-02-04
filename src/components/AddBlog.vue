<template>
 <div id="add-blog">
   <h2>添加博客</h2>
  	<form v-if="!submmited">
  		<label>主题：</label>
	  	<input type="text" name="" v-model="blog.title">
	  		<label>内容：</label>
	  		<textarea v-model="blog.body"></textarea>
	  	<div id="checkbox" >
	  		<input type="checkbox" value="Vue.js" v-model="blog.categories">
	  		<label>Vue.js</label>
	  		<input type="checkbox" value="react.js" v-model="blog.categories">
	  		<label>react.js</label>
	  		<input type="checkbox" value="Angular4" v-model="blog.categories">
	  		<label>Angular4</label>
	  		<input type="checkbox" value="Node.js" v-model="blog.categories">
	  		<label>Node.js</label>
	  	</div>
	  	<label>作者：</label>
	  	<select v-model="blog.author">
	  		<option v-for="author in authors">{{author}}</option>
	  	</select>
	  	<button @click.prevent="post">添加博客</button>
  	</form>
  	<div v-if="submmited">
  		<h3>您的博客发布成功</h3>
  	</div>
  	<div id="preview">
  		<h3>博客总览</h3>
  		<p>博客标题：{{blog.title}}</p>
  		<p>博客内容：</p>
  		<article>{{blog.content}}</article>
  		<p>博客分类：</p>
  		<ul>
  			<li v-for="category in blog.categories">{{category}}</li>
  		</ul>
  		<p>作者：{{blog.author}}</p>
  	</div>
 </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'add-blog',
  data () {
    return {
    	blog:{
    		title:'',
	    	body:'',
	    	categories:[],
	    	author:''
    	},
	    authors:['duoduo','dance','anmy'],
	    submmited:false

    }
  },
  methods:{
  	post(){
  		// axios.post('https://jsonplaceholder.typicode.com/posts',this.blog)
  		axios.post('http://localhost:3005/users',this.blog)
  		.then((res)=>{
  			console.log(res.data)
  			this.submmited = true
  		})
  		.catch((error)=>{
  			console.log(error)
  		})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog *{
	box-sizing: border-box;
}
#add-blog{
	max-width: 800px;
	margin:20px auto;
}
#add-blog h2{
	margin-bottom: 20px;
}
label{
	display: block;
	width: 100%;
	font-size: 18px;
	margin:10px 0;
	font-weight: bold;
}
input[type="text"]{
	height: 40px;
	display: inline-block;
}
input[type="text"],textarea,select{
	width:100%;
	display: block;
	outline: none;
	text-indent: 8px;
}
select{
	height: 30px;
}

textarea{
	height: 200px;
}
#checkbox{
	margin-top: 4px;
}
#checkbox label{
	display: inline;
	margin-right: 10px;
}
button{
	margin: 20px 0;
	color: #fff;
	background-color: crimson;
	border: 0;
	border-radius: 4px;
	display: block;
	padding: 8px 10px;
	cursor: pointer;
	font-size:18px;

}
#preview h3{
	margin-top: 10px;
}
#preview p{
	padding: 10px 0;
	font-weight: bold;
}
#preview ul li{
	margin:8px 0;
}
</style>
