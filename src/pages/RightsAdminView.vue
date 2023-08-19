<template>
  <div>
    <el-form :inline="true" :model="formUser" class="demo-form-inline">
      <el-form-item label="角色名称">
        <el-select v-model="formUser.region" placeholder="综合办">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-row class="btn">
      <el-button type="primary" @click="dialogFormVisible = true" style="margin-right: 10px">新增角色</el-button>
      <el-dialog title="新增角色" :visible.sync="dialogFormVisible" :width="dialogWidth" :before-close="beforeDialogClose">
        <el-form :model="form">
          <el-form-item label="角色编码" :label-width="formLabelWidth">
            <el-input v-model="form.code" autocomplete="off" :style="{ width: '50%' }"></el-input>
          </el-form-item>
          <el-form-item label="角色名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" :style="{ width: '50%' }"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
        </div>
      </el-dialog>
      <el-button type="primary" @click="save">保存</el-button>
      <el-button type="danger" @click="delRole">删除该角色</el-button>
    </el-row>
    <el-row>
      <!-- 左侧区域 -->
      <el-col :span="2" :offset="1">
        <el-checkbox style="margin-top: 50px" v-model="checked1" selected and disabled>运行概况</el-checkbox>
        <el-checkbox style="margin-top: 20px" v-model="checked2">实时监控</el-checkbox>
        <el-checkbox style="margin-top: 20px" v-model="checked6">设备信息</el-checkbox>
        <el-checkbox style="margin-top: 20px" v-model="checked10">设备状态</el-checkbox>
        <el-checkbox style="margin-top: 20px" v-model="checked13">供应商监控</el-checkbox>
      </el-col>

      <!-- 中间区域 -->
      <el-col :span="2" :offset="1">
        <el-checkbox style="margin-top: 50px" v-model="checked1" selected and disabled>系统管理</el-checkbox>
        <el-checkbox style="margin-top: 20px" v-model="checked2">权限管理</el-checkbox>
        <el-checkbox style="margin-top: 20px" v-model="checked6">区域管理</el-checkbox>
        <el-checkbox style="margin-top: 20px" v-model="checked10">用户管理</el-checkbox>
        <el-checkbox style="margin-top: 20px" v-model="checked13">部门管理</el-checkbox>
        <el-checkbox style="margin-top: 20px" v-model="checked10">数据字典</el-checkbox>
        <el-checkbox style="margin-top: 20px" v-model="checked13">设备管理</el-checkbox>
        <el-checkbox style="margin-top: 20px" v-model="checked10">社区管理</el-checkbox>

      </el-col>

      <!-- 右侧区域 -->
      <el-col :span="2" :offset="1">
        <el-checkbox style="margin-top: 50px" v-model="checked9" selected and disabled>报表管理</el-checkbox>
        <el-checkbox style="margin-top: 20px" v-model="checked4">社区月度报表</el-checkbox>
        <el-checkbox style="margin-top: 20px" v-model="checked8">设备月度报表</el-checkbox>
        <el-checkbox style="margin-top: 20px" v-model="checked12">城市月度报表</el-checkbox>
        <el-checkbox style="margin-top: 20px" v-model="checked15">行政月度报表</el-checkbox>
      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  name:'RightsAdminView',
  data() {
    return {
      formUser: {
        user: "",
        department: "",
        rolename: "",
        attribution: ""
      },
      dialogFormVisible: false,
      dialogWidth:"30%",
      form: {
        name: '',
        region: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },

  methods: {
    save() {
    },
    delRole() {
    }
  },
}
</script>


<style lang="less" scoped>
.el-aside {
  color: #333;
}

.cek {
  flex-wrap: wrap;
}

.container {
  margin-top: 20px;
}
</style>