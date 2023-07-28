<template>
  <div class="header-container">
    <div class="l-content">
      <h2>湿垃圾设备远程监控可视化系统</h2>
    </div>
    <div class="r-content">
      <el-row style="text-align: right; font-size: 12px">
        <el-button icon="el-icon-refresh" @click="onFlushed">刷新</el-button>
        <el-button icon="el-icon-user">用户</el-button>
        <el-button icon="el-icon-switch-button" @click="onQuit">退出</el-button>
      </el-row>
    </div>
  </div>
</template>


<script>
export default ({
  name:'CommonHeader',
  data() {
    return {}
  },
  methods: {
    onFlushed() {
      location.reload()
    },
    onQuit() {
      this.$cookies.remove('token');
      this.$router.push('/login');
    },
  }
})
</script>


<style lang="less" scoped>
.l-content{
  margin-top: 20px;
}
.r-content{
  margin-top: 20px;
}
.header-container {
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>