<template>
  <div class="demo-progress">
    <div class="progress"> 
    <el-progress type="circle" :stroke-width="20" :percentage="percentage" width=200>
      <template #default="{ percentage }">
        <span class="percentage-value">{{ percentage }}<span class="percentage-per">%</span></span>
        <span class="percentage-label">异常分数</span>
      </template>
    </el-progress>
    <div class="progress-color">
      <progressColor style="width: 0;height: 0;"></progressColor>
    </div>
</div>

    <div class="demo-status">
        <el-image style="width: 70px; height: 70px" :src="status.url" :fit="fit" />
      <div class="status-tips">
        <div>
          检测状态
        </div>
        <div :style="{color:status.color}">
          {{ status.name }}
        </div>
      </div>
    </div>
      <Slide :status='percentage' @change="changeSlide" />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, defineComponent } from 'vue'
import Slide from './components/index.vue';
import progressColor from '../../components/progress-color.vue';
import normal from '../../assets/imgs/zhengchang@3x.png';
import error from '../../assets/imgs/baojing@3x.png'
import unknown from '../../assets/imgs/weizhi@3x.png'
const fit = 'cover'
const percentage = ref(10)
const status = ref({
  name:'正常',
  color:'blue',
  url:normal
})
const changeSlide = (val) => {
  percentage.value = val
  // 当百分比等于 0%时，检测状态为未知；百分比在 0-50%时，检测状态为正常；百分比在 50%以上时，检测状态为报警。
  if (val === 0) {
    status.value.name = '未知'
    status.value.color = '#909399'
    status.value.url= unknown
  } else if (val > 0 && val < 50) {
    status.value.name = '正常'
    status.value.color = 'blue'
    status.value.url= normal

  } else if (val > 50) {
    status.value.name = '报警'
    status.value.color = 'red'
    status.value.url = error

  }
}


</script>

<style scoped> 
.demo-progress {
   width: 400px;
   padding: 20px;
   margin: auto;
 }
.progress{
  width:200px;
  margin:auto
}
 .progress-color {
   height: 0;
   overflow: hidden;
   /* display: none; */
 }

 .percentage-value {
   display: block;
   margin-top: 10px;
   font-size: 44px;
   color: #42b883;
   font-weight: 500;

 }

 .percentage-per {
   font-size: 30px;
   color: #42b883;
 }

 .percentage-label {
   display: block;
   margin-top: 10px;
   font-size: 20px;
   font-weight: 500;
   color: #282a5d
 }

 .demo-status {
   width: 150px;
   display: flex;
   flex-wrap: nowrap;
   margin:15px auto;
 }

 .demo-progress .el-progress--line {
   margin-bottom: 15px;
   width: 350px;
 }
 .status-tips{
   padding: 10px; 
  }

 .demo-progress .el-progress--circle {
   margin-right: 15px;
 }
 .demo-progress /deep/ .el-progress-circle .el-progress-circle__track{
  stroke:  #d2d1d1
 }
 .demo-progress /deep/ .el-progress-circle .el-progress-circle__path {
   stroke: url(#dismantle);
 }</style>
