<template>
  <div>
    <el-form :inline="true" :model="formDataDic" class="demo-form-inline">
      <el-form-item label="父节点:">
        <el-select v-model="formDataDic.type" placeholder="数据类型">
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-radio v-model="formDataDic.radio" label="1">启用</el-radio>
        <el-radio v-model="formDataDic.radio" label="2">关闭</el-radio>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保持所有状态</el-button>
        <el-button type="primary" @click="modifyPar">修改父节点</el-button>
        <el-button type="primary" @click="dialogFormVisible = true">添加子节点</el-button>
        <el-dialog title="添加子节点" :visible.sync="dialogFormVisible" width="55%">
          <el-form :model="form">
            <el-form-item label="id">
              <el-input v-model="form.id" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="编码">
              <el-input v-model="form.code" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="名称">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="说明">
              <el-input v-model="form.state" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            <el-button @click="dialogFormVisible = false">取 消</el-button>
          </div>
        </el-dialog>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="dataid" label="id" align="center"></el-table-column>
      <el-table-column prop="encode" label="编码" align="center"></el-table-column>
      <el-table-column prop="dataname" label="名称" align="center"></el-table-column>
      <el-table-column prop="instru" label="说明" align="center"></el-table-column>
      <el-table-column prop="state" label="状态" align="center">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="primary" size="small">修改</el-button>
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
  name:'DataDicAdminView',
  data() {
    return {
      tableData: [{
        dataid: "2",
        encode: "PRO",
        dataname: "属性",
        instru: "",
        state: "",
      }, {
        dataid: "3",
        encode: "DASH",
        dataname: "仪表盘",
        instru: "23",
        state: "",
      }, {
        dataid: "4",
        encode: "WAVE",
        dataname: "波形",
        instru: "",
        state: "",
      }, {
        dataid: "5",
        encode: "DL04",
        dataname: "WEE",
        instru: "23",
        state: "",
      }],
      formDataDic: {
        type: "",
        radio: "1"
      },
      value: true,
      dialogFormVisible: false,
      form: {
        id: '',
        code: '',
        name:'',
        state:'',
      },
    }
  },
  methods: {
    handleClick() {

    },
    onSubmit() {

    },
    modifyPar() {

    },
    modifySon() {

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