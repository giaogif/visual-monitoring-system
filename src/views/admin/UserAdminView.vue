<template>
  <div>
    <el-form :inline="true" :model="formUser" class="demo-form-inline">
      <el-form-item label="用户名">
        <el-input v-model="formUser.user" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="部门">
        <el-input v-model="formUser.department" placeholder="部门名"></el-input>
      </el-form-item>
      <el-form-item label="角色">
        <el-input v-model="formUser.rolename" placeholder="角色名"></el-input>
      </el-form-item>
      <el-form-item label="归属地">
        <el-input v-model="formUser.attribution" placeholder="归属地"></el-input>
      </el-form-item>
      <el-button type="primary" @click="search">查询</el-button>
      <el-button type="primary" @click="dialogFormVisible = true" style="margin-right: 10px;">添加用户</el-button>
      <el-dialog title="添加用户" :visible.sync="dialogFormVisible">
        <el-form :model="form" :rules="rules" label-position="right" label-width="80px">
          <el-row>
            <el-col :span="12">
              <el-form-item label="用户名称"  prop="username">
                <el-input v-model="form.username" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="登录密码"  prop="password">
                <el-input v-model="form.password" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="电话"  >
                <el-input v-model="form.phone" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="角色"  prop="role">
                <el-select v-model="form.role" placeholder="请选择角色">
                  <el-option label="角色一" value="shanghai"></el-option>
                  <el-option label="角色二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="归属地"  prop="region">
                <el-select v-model="form.region" placeholder="请选择">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="登录名称"  prop="loginname">
                <el-input v-model="form.loginname" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="职位" >
                <el-input v-model="form.position" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" >
                <el-input v-model="form.email" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="部门" >
                <el-select v-model="form.section" placeholder="请选择部门">
                  <el-option label="部门一" value="shanghai"></el-option>
                  <el-option label="部门二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="供应商" >
                <el-select v-model="form.supplier" placeholder="请选择供应商">
                  <el-option label="供应商一" value="shanghai"></el-option>
                  <el-option label="供应商二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
        </div>
      </el-dialog>
      <el-button type="primary" @click="dialogTwoVisible = true">添加供应商</el-button>
      <el-dialog title="添加供应商" :visible.sync="dialogTwoVisible" width="30%">
        <el-form :model="form2">
          <el-form-item label="供应商名称" :label-width="formLabelTwoWidth">
            <el-input v-model="form2.suppliername" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogTwoVisible = false">确 定</el-button>
          <el-button @click="dialogTwoVisible = false">取 消</el-button>
        </div>
      </el-dialog>
    </el-form>
    <el-table :data="tableData" border>
      <el-table-column prop="username" label="用户名" align="center" width="100"></el-table-column>
      <el-table-column prop="login" label="登录名" align="center" width="100"></el-table-column>
      <el-table-column prop="rolename" label="角色名" align="center"></el-table-column>
      <el-table-column prop="department" label="部门" align="center"></el-table-column>
      <el-table-column prop="posts" label="职位" align="center"></el-table-column>
      <el-table-column prop="phone" label="电话" align="center"></el-table-column>
      <el-table-column prop="email" label="邮箱" align="center"></el-table-column>
      <el-table-column prop="vendor" label="供应商" align="center"></el-table-column>
      <el-table-column prop="attribution" label="归属地" align="center"></el-table-column>
      <el-table-column prop="state" label="状态" align="center"></el-table-column>
      <el-table-column label="操作" align="center" width="200">
        <template slot-scope="scope">
          <div style="display: flex; justify-content: space-around; align-items: center; width: 100%;">
            <el-button @click="handleClick(scope.row)" type="primary" size="small">查看</el-button>
            <el-button type="primary" size="small" @click="edit">编辑</el-button>
            <el-button type="danger" size="small" @click="enabele">启用</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination-wrapper">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
        layout="total, sizes, prev, pager, next, jumper" :total="100">
      </el-pagination>
    </div>
  </div>
</template>


<script>
export default {
  name:'UserAdminView',
  data() {
    return {
      tableData: [{
        username: "李丹",
        login: "12412",
        rolename: "总经理",
        department: "研发",
        posts: "13",
        phone: "19546917538",
        email: "123456@qq.com",
        vendor: "A供应商",
        attribution: "工研院",
        state: "启用",
      }, {
        username: "张三",
        login: "254",
        rolename: "普通职员",
        department: "销售",
        posts: "10",
        phone: "17346921530",
        email: "2508899640@qq.com",
        vendor: "A供应商",
        attribution: "工研院",
        state: "启用",
      }, {
        username: "王德发",
        login: "733",
        rolename: "经理",
        department: "研发",
        posts: "11",
        phone: "17346921530",
        email: "2508899640@qq.com",
        vendor: "B供应商",
        attribution: "工研院",
        state: "启用",
      }, {
        username: "李四",
        login: "1254",
        rolename: "普通职员",
        department: "研发",
        posts: "12",
        phone: "17346921530",
        email: "2508899640@qq.com",
        vendor: "A供应商",
        attribution: "工研院",
        state: "启用",
      }, {
        username: "王五",
        login: "11254",
        rolename: "中层职员",
        department: "销售",
        posts: "12",
        phone: "17346921530",
        email: "2508899640@qq.com",
        vendor: "A供应商",
        attribution: "工研院",
        state: "启用",
      }, {
        username: "赵六",
        login: "23256",
        rolename: "经理",
        department: "研发",
        posts: "12",
        phone: "17346921530",
        email: "2508899640@qq.com",
        vendor: "A供应商",
        attribution: "工研院",
        state: "启用",
      }],
      formUser: {
        user: "",
        department: "",
        rolename: "",
        attribution: ""
      },
      dialogFormVisible: false,
      dialogTwoVisible: false,
      form: {
        username: '',
        password: '',
        phone: '',
        role: '',
        region: '',
        loginname: '',
        position: '',
        email: '',
        section: '',
        supplier: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      form2: {
        suppliername: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        username: [
          { required: true, trigger: 'blur', message: '请输入用户名' }
        ],
        password: [
          { required: true, trigger: 'blur', message: '请输入密码' }
        ],
        role: [
          { required: true, trigger: 'blur', message: '请输入你的角色名称' }
        ],
        region: [
          { required: true, trigger: 'blur', message: '请输入你的归属地' }
        ],
        loginname: [
          { required: true, trigger: 'blur', message: '请输入你的登录名' }
        ]
      }
    }
  },

  methods: {
    search() {

    },
    submit(){
      // this.$refs.form.validate((valid)=>{
      //   if(valid){
      //      //后续对表单数据的处理
      //     this.$refs.form.resetFields()
      //      //关闭弹窗
      //      this.dialogFormVisible = false
      //   }
      // })
    },
    //弹窗关闭的时候
    handleClose() {
      // this.$refs.form.resetFields()
      // this.dialogFormVisible = false
    },
    cancel(){
      // this.handleClose()
    },
    submitTwo(){

    },
    edit() {

    },
    enabele() {

    },
    handleSizeChange(pageSize){
      // console.log(pageSize)
      // this.pageSize=pageSize
      // this.load()
    },
  }
}
</script>


<style lang="less" scoped>
.el-aside {
  color: #333;
}
.form-label {
  margin-right: 0 !important;
}
.dialog-footer {
  text-align: center;
}

.pagination-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>