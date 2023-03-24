<template>
  <header class="header">
    <nav class="nav">
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">视频</a></li>
        <li><a href="#">音乐</a></li>
        <li><a href="#">图书</a></li>
        <li><a href="#">游戏</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SiteHeader'
})
</script>

<style>
.header {
  background-color: #fb7299;
  color: #fff;
  padding: 10px;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav ul {
  display: flex;
  list-style: none;
}

.nav ul li {
  margin-right: 20px;
}

.nav ul li:last-child {
  margin-right: 0;
}

.nav ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
}
</style>
