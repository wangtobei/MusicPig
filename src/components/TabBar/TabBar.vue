<template>
  <div class="tabbar">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#F56C6C"
      text-color="#000000"
      :router="router"
    >
      <li class="logo">
        <span class="music">Music</span>
        <span class="pig">Pig</span>
      </li>
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/search">搜索</el-menu-item>
      <el-menu-item index="/about">关于</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "/home",
      router: true,
    };
  },
};
</script>
<style scoped>
.logo {
  margin: 5px;
  float: left;
  margin-top: 12px;
}
.music {
  color: rgb(255, 255, 255);
  padding: 5px 5px;
  font-size: 25px;
  font-weight: 700;
}
.pig {
  color: rgb(255, 255, 255);
  font-size: 25px;
  font-weight: 700;
  border-radius: 7px;
  background:rgb(196, 86, 86) ;
}
.tabbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
</style>