<template>
    <el-menu>
        <el-submenu index="1">
            <template slot="title"><i class="el-icon-monitor"></i>运行概况</template>
            <el-menu-item index="1-1">
          <router-link to="/rtmonitor">实时监控</router-link>
      </el-menu-item>
            <el-menu-item index="1-2">
                <router-link to="/devinfor">设备信息</router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
                <router-link to="/devstatus"> 设备状态</router-link>
            </el-menu-item>
            <el-menu-item index="1-4">
                <router-link to="/alarm">报警管理</router-link>
            </el-menu-item>
            <el-menu-item index="1-5">
                <router-link to="/suppliermonitor">供应商监控</router-link>
            </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title"><i class="el-icon-setting"></i>系统管理</template>
            <el-menu-item index="2-1">
                <router-link to="/rightsadmin">权限管理</router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
                <router-link to="/regionadmin">区域管理</router-link>
            </el-menu-item>
            <el-menu-item index="2-3">
                <router-link to="/useradmin">用户管理</router-link>
            </el-menu-item>
            <el-menu-item index="2-4">
                <router-link to="/deptadmin">部门管理</router-link>
            </el-menu-item>
            <el-menu-item index="2-5">
                <router-link to="/datadicadmin">数据字典</router-link>
            </el-menu-item>
            <el-menu-item index="2-6">
                <router-link to="/deviceadmin">设备管理</router-link>
            </el-menu-item>
            <el-menu-item index="2-7">
                <router-link to="/communityadmin">社区管理</router-link>
            </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title"><i class="el-icon-document"></i>地图显示</template>
            <el-menu-item index="3-1">
                <router-link to="/mapshow">设备位置</router-link>
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>


<script>
export default({
    name:'CommonAside',
    data() {
        return{}
    },
})
</script>


<style lang="less" scoped>
.el-menu{
    height: 100vh;
}

.el-menu-item {
   a {
    display: block;
    width:  100%;
    height: 100%;
    text-decoration: none;
    line-height: inherit;
    color: inherit;
  }
}

</style>

