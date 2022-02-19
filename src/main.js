// 导入默认路由
// 导入vant 组件库中需要的模块
// 全局使用vant组件库的模块
import Vue from 'vue'
import App from './App.vue'
import "@/mobile/flexible"//适配
import "@/styles/reset.css"//初始化样式
import router from "@/router"//导入路由对象
// import { Tabbar, TabbarItem, NavBar, Col, Row, Image as VanImage, Cell, Icon, Search, List } from 'vant';
// Vue.use(List);
// Vue.use(Search);
// Vue.use(Icon);
// Vue.use(Cell);
// Vue.use(VanImage);
// Vue.use(Col);
// Vue.use(Row);
// Vue.use(Tabbar);
// Vue.use(TabbarItem);
// Vue.use(NavBar);
//mount 挂载 render 渲染
Vue.config.productionTip = false
new Vue({
  router,//注册到vue
  render: h => h(App),

}).$mount('#app')

// 测试封装的api方法
// import {recommendMusicAPI} from '@/api'
// async function fn(){
//   const res = await recommendMusicAPI() // api方法原地会得到axios请求在原地的Promise对象(里面有一个ajax请求)
//   console.log(res);
// }
// fn()