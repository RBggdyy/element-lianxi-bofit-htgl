<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,ul,ol,dl,dd,p,h1,h2,h3,h4,h5,h6,input,textarea,hr{
 margin:0;
 padding:0;
}
body{
 font-family: "微软雅黑";
  width: 100%;
  height: 100%;
}
ul,ol{
 list-style: none;
}
a{
 text-decoration: none;
}
img{
 border: none;
 display:block;
}
</style>
