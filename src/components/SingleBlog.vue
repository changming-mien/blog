<template>
 <div id="single-blog">
   <h4 v-rainbow>{{blog.title|to-uppercase}}</h4>
   <article>{{blog.body}}</article>
 </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'single-blog',
  data () {
    return {
    	id:this.$route.params.id,
    	blog:{}
    }
  },
  created(){
    // axios.get('https://jsonplaceholder.typicode.com/posts/'+this.id)
  	axios.get('http://localhost:3005/users/'+this.id)
  		.then((res)=>{
  			console.log(res)
  			this.blog=res.data 
  		})
  		.catch((error)=>{
  			console.log(error)
  		})
  },
  directives:{
  	"rainbow":{
  		bind(el,binding,vnode){
	  		el.style.color="#"+Math.random().toString(16).slice(2,8)
	  	}
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
#single-blog{
	max-width: 800px;
	padding: 20px;
	margin: 0 auto;
	background-color: #eee;
	border: 1px dotted #aaa;
}
</style>
