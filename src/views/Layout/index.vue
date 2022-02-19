<template>
  <div>
    <!-- <p>我是layOut</p> -->
    <!-- 二级路由挂载点 -->
    <router-view> </router-view>
    <!-- TabBar -->
    <!-- v-model 默认绑定选中标签的索引值，通过修改 v-model 即可切换选中的标签。 -->
    <!--    
          http://localhost:8080/#/layout/home  二级路由显示页面 A
          http://localhost:8080/#/layout/search 二级路由显示页面 B
          优化体验,点击首页触发 A ,点击搜索触发 B 
     -->
    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/layout/home" icon="home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item replace to="/layout/search" icon="search"
        >搜索</van-tabbar-item
      >
      <!-- <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item> -->
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style scoped>
/* 中间内容区域 - 容器样式(留好上下导航所占位置) */
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>