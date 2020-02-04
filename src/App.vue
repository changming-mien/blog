<template>
  <div id="app">
    <header-blog></header-blog>
    <router-view/>
  </div>
</template>

<script>
import HeaderBlog from '@/components/HeaderBlog'
import ShowBlogs from '@/components/ShowBlogs'
import AddBlog from '@/components/AddBlog'
import SingleBlog from '@/components/SingleBlog'


export default {
  components:{
    HeaderBlog,ShowBlogs,AddBlog,SingleBlog
  },
  name: 'App'
}
</script>

<style>
*{
  padding: 0;
  margin:0; 
}
</style>
