<template>
  <div class="top-nav">
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="logo">
          <img src="" alt="Logo" />
        </div>
      </el-col>
      <el-col :span="16">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">电影</el-menu-item>
          <el-menu-item index="3">电视剧</el-menu-item>
          <el-menu-item index="4">动漫</el-menu-item>
          <el-menu-item index="5">综艺</el-menu-item>
          <el-menu-item index="6">新闻</el-menu-item>
          <el-menu-item index="7">排行榜</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="4">
        <el-input
            placeholder="请输入搜索关键字"
            suffix-icon="el-icon-search"
            clearable
            v-model="searchText"
            @clear="handleClear"
            @keyup.enter.native="handleSearch"
        ></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      searchText: '',
      activeIndex: '1',
    });

    const handleSelect = (index) => {
      state.activeIndex = index;
    };

    const handleClear = () => {
      state.searchText = '';
    };

    const handleSearch = () => {
      console.log(`Search for ${state.searchText}`);
    };

    return {
      state,
      handleSelect,
      handleClear,
      handleSearch,
    };
  },
};
</script>

<style scoped>
.top-nav {
  background-color: #333;
  padding: 10px 0;
}

.top-nav .logo {
  font-size: 24px;
  color: #fff;
}

.el-menu-demo {
  background-color: #333;
  border: none;
  font-size: 16px;
  margin: 0;
}

.el-menu-demo .el-menu-item {
  color: #fff;
}

.el-menu-demo .el-menu-item:hover,
.el-menu-demo .el-menu-item.is-active {
  color: #ffd04b;
}

.el-input__inner {
  background-color: #444;
  color: #fff;
  border: none;
}

.el-input__inner::placeholder {
  color: #999;
}

.el-input__suffix {
  color: #fff;
}
</style>
