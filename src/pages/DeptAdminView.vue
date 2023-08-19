<template>
  <div>
    <el-form :inline="true" :model="formDept" class="demo-form-inline">
      <el-form-item label="部门名称">
        <el-input v-model="formDept.department" placeholder="请输入部门名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
        <el-dialog title="新增部门" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="部门编码" :label-width="formLabelWidth">
              <el-input v-model="form.code" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="部门名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="上级部门" :label-width="formLabelWidth">
              <el-input v-model="form.superior" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            <el-button @click="dialogFormVisible = false">取 消</el-button>
          </div>
        </el-dialog>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%" align="center">
      <el-table-column prop="deptid" label="部门编码" align="center"></el-table-column>
      <el-table-column prop="deptname" label="部门名称" align="center"></el-table-column>
      <el-table-column prop="parentdept" label="上级部门" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <div style="display: flex; justify-content: center; align-items: center;">
            <el-button type="primary" size="small" @click="edit">编辑</el-button>
            <el-button type="danger" size="small" @click="del">删除</el-button>
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
  name:'DepAdminView',
  data() {
    return {
      tableData: [{
        deptid: "1",
        deptname: "总经理",
        parentdept: "",
      }, {
        deptid: "1",
        deptname: "综合部",
        parentdept: "工程部&客服部",
      }, {
        deptid: "1",
        deptname: "市场部",
        parentdept: "",
      }, {
        deptid: "1",
        deptname: "数据开发",
        parentdept: "",
      }, {
        deptid: "1",
        deptname: "总经理",
        parentdept: "工程部&客服部",
      }],
      formDept: {
        department: "",
      },
      dialogFormVisible: false,
      form:{
        code:'',
        name:'',
        superior:''
      }
    }
  },
  methods: {
    handleNodeClick() {

    },
    onSubmit() {

    },
    edit() {

    },
    del() {

    }
  },

}
</script>


<style lang="less" scoped>
.el-aside {
  color: #333;
}
.pagination-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>