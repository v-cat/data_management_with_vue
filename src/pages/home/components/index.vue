<template>
  <div class="slider-demo-block">
    <el-slider v-model="value1"  size="large" @change="change"/>
  </div>
</template>

<script lang="ts" setup>

import { ref, onMounted ,watch} from 'vue'
const props = defineProps({
  status: {
    type: Number,
    default: false
  }
})
const value1 = ref(0)
onMounted(()=>{
  value1.value = props.status 
})
watch(() => props.status, () => {
  value1.value = props.status })
const emit = defineEmits(['change'])
const change = (val) => {
  emit('change', val)

}

</script>
<style scoped>
.slider-demo-block {
  display: flex;
  align-items: center;
}

.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}

.slider-demo-block .demonstration {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  line-height: 44px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
}

.slider-demo-block .demonstration+.el-slider {
  flex: 0 0 70%;
}
</style>
