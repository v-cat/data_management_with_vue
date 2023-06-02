import {
  createApp
} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router'
import './styles/element/index.scss'
import './assets/main.css'

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app =
  createApp(App)
// size 用于设置表单组件的默认尺寸，zIndex 用于设置弹出组件的层级，zIndex 的默认值为 2000。
app.use(ElementPlus, {
  size: 'small',
  zIndex: 3000,
  locale: zhCn,
}).use(router)
app.mount('#app')