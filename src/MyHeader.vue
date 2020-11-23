<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
    <el-menu-item index="0" route="/login">Login</el-menu-item>
    <el-submenu index="1">
      <template slot="title">出貨</template>
      <el-menu-item index="1-1" route="/deliver/work">出貨作業</el-menu-item>
      <el-menu-item index="1-2">出貨紀錄</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">商品管理</template>
      <el-menu-item index="2-1">商品管理</el-menu-item>
      <el-menu-item index="2-2">商品出貨紀錄</el-menu-item>
    </el-submenu>
    <el-menu-item index="3" route="/customer">顧客管理</el-menu-item>
    <el-menu-item index="4"><a href="https://www.google.com.tw" target="_blank">古哥哥</a></el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: 'myHeader',
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
