<template>
  <div class="container">
    <div class="right">
      <div class="top"> 
        top
      </div>
      <div class="main">  <router-view></router-view></div>
      <div  class="footer">footer</div>
    </div>


  </div>
</template>

<script lang="ts" setup>
</script>

<style>
.container {
  width: 100%;
  height: 100vh;
  background: rgb(228, 228, 228);
  display: flex;
  flex-wrap: nowrap;
}
.container .right{
  width: 100%;
}
.container .right .top{
  width: 100%;  
  height: 50px;
  background: white;
  text-align: center;
  border-bottom: 1px solid rgb(229 229 229);
  line-height: 50px;

}
.container .right .main{
  padding: 40px;
  width: 100%;  
  height: calc(100vh - 100px);
  background: #f2fff6
}
.container .right .footer{
  width: 100%;  
  height: 50px;
  position: absolute;
  bottom: 0;
  background:rgb(229 229 229);
  text-align: center;
  line-height: 50px;
}
</style>
