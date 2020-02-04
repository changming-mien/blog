<template>
 <div id="header-blog">
  <nav>
  	<router-link to="/" exact>博客</router-link>
  	<router-link to="/addblog" exact>写博客</router-link>
  </nav>
 </div>
</template>

<script>
export default {
  name: 'header-blog',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header-blog *{
	box-sizing: border-box;
}
nav{
	padding: 30px 0;
	margin-bottom: 30px;
	background-color: crimson;
	text-align: center;
}

#header-blog a{
	text-align: center;
	text-decoration: none;
	border-radius: 5px;
	display: inline-block;
	padding: 12px;
	color: #fff;
}
.router-link-active{
	background-color: rgba(255,255,255,0.5);
	color: #444;
}
</style>
