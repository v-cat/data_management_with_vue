<template>
  <div class="container">
    <!-- <div class="left"> -->
      <!-- <div class="projectName"> -->
        <!-- 管理平台 -->
        <!-- </div> -->
      <!-- <el-menu default-active="1" class="el-menu-vertical-demo" > -->
        <!-- <el-menu-item index="1">
          <el-icon>
            <location />
          </el-icon>  
          <template #title> <router-link to='/homePage'> 首页	</router-link>
          </template>
        </el-menu-item> -->
        <!-- <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <template #title> <router-link to='/view'> 看板	</router-link></template>
        </el-menu-item>
        <el-menu-item index="3" >
          <el-icon>
            <document />
          </el-icon>
          <template #title><router-link to='/userManger'> 用户管理	</router-link></template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <setting />
          </el-icon>
          <template #title><router-link to='/goodsManger'> 商品管理	</router-link></template>
        </el-menu-item> -->
      <!-- </el-menu> -->
    <!-- </div> -->
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
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
 
</script>

<style>
.container {
  width: 100%;
  height: 100vh;
  background: rgb(228, 228, 228);
  display: flex;
  flex-wrap: nowrap;
}
.container  .projectName{
height: 50px;
text-align: center;
 line-height: 50px;
background: #42b883;
}
.container  .el-menu-vertical-demo{
  height:calc( 100% - 50px)
}
.container .left {
  width: 20%;
  max-width: 150px;
  background: white;
  /* border-right: 1px solid rgb(229 229 229); */
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
