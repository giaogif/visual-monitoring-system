<template>
  <div>
    <el-form :inline="true" :model="formCommunity" class="demo-form-inline">
      <el-form-item label="城市">
        <el-input v-model="formCommunity.city" placeholder="请输入城市"></el-input>
      </el-form-item>
      <el-form-item label="行政区">
        <el-input v-model="formCommunity.district" placeholder="请输入区域"></el-input>
      </el-form-item>
      <el-form-item label="街道名称">
        <el-input v-model="formCommunity.street" placeholder="请输入街道"></el-input>
      </el-form-item>
      <el-form-item label="社区名称">
        <el-input v-model="formCommunity.community" placeholder="请输入社区"></el-input>
      </el-form-item>
      <el-form-item label="小区名称">
        <el-input v-model="formCommunity.residential" placeholder="请输入小区"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="serach">查询</el-button>
      </el-form-item>
    </el-form>
    <el-row>
      <el-button type="primary" size="small" @click="dialogFormVisible = true" style="margin-right: 10px">添加小区</el-button>
      <el-dialog title="添加小区" :visible.sync="dialogFormVisible" :width="dialogWidth">
        <el-form :model="form">
          <el-form-item label="城市" :label-width="formLabelWidth">
            <el-input v-model="form.city" autocomplete="off" :style="{ width: '50%' }"></el-input>
          </el-form-item>
          <el-form-item label="行政区" :label-width="formLabelWidth">
            <el-input v-model="form.region" autocomplete="off" :style="{ width: '50%' }"></el-input>
          </el-form-item>
          <el-form-item label="街道名称" :label-width="formLabelWidth">
            <el-input v-model="form.street_name" autocomplete="off" :style="{ width: '50%' }"></el-input>
          </el-form-item>
          <el-form-item label="社区名称" :label-width="formLabelWidth">
            <el-input v-model="form.comm_name" autocomplete="off" :style="{ width: '50%' }"></el-input>
          </el-form-item>
          <el-form-item label="小区名称" :label-width="formLabelWidth">
            <el-input v-model="form.redientialquarter_name" autocomplete="off" :style="{ width: '50%' }"></el-input>
          </el-form-item>
          <el-form-item label="服务人数" :label-width="formLabelWidth">
            <el-input v-model="form.served_num" autocomplete="off" :style="{ width: '50%' }"></el-input>
          </el-form-item>
          <el-form-item label="户数" :label-width="formLabelWidth">
            <el-input v-model="form.households_num" autocomplete="off" :style="{ width: '50%' }"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="submit">确 定</el-button>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
        </div>
      </el-dialog>
      <el-button type="primary" size="small" @click="edit">修改</el-button>
      <el-button type="danger" size="small" @click="deleteItem">删除</el-button>
    </el-row><br>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="city" label="城市" align="center"></el-table-column>
      <el-table-column prop="district" label="行政区" align="center"></el-table-column>
      <el-table-column prop="street" label="街道名称" align="center"></el-table-column>
      <el-table-column prop="community" label="社区名称" align="center"></el-table-column>
      <el-table-column prop="residential" label="小区名称" align="center"></el-table-column>
      <el-table-column prop="people_num" label="服务人数" align="center"></el-table-column>
      <el-table-column prop="household" label="户数" align="center"></el-table-column>
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
  name:'CommnunityAdminView',
  data() {
    return {
      tableData: [{
        city: "武汉",
        district: "江夏区",
        street: "高新大道",
        community: "工业产业园",
        residential: "墨香楼",
        people_num: "644",
        household: "342",
      }, {
        city: "沈阳",
        district: "浑南区",
        street: "五三街道",
        community: "工业产业园",
        residential: "墨香楼",
        people_num: "250",
        household: "13",
      }, {
        city: "武汉",
        district: "江夏区",
        street: "高新大道",
        community: "工业产业园",
        residential: "墨香楼",
        people_num: "644",
        household: "342",
      }, {
        city: "武汉",
        district: "江夏区",
        street: "高新大道",
        community: "工业产业园",
        residential: "墨香楼",
        people_num: "644",
        household: "342",
      }],
      formCommunity: {
        city: "",
        district: "",
        street: "",
        community: "",
        residential: ""
      },
      dialogFormVisible: false,
      dialogWidth: "30%",
      form: {
        city: '',
        region: '',
        street_name: '',
        comm_name: '',
        redientialquarter_name: '',
        served_num: '',
        households_num: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    serach() {
      const {
        city,
        district,
        street,
        community,
        residential
      } = this.formCommunity;
      this.tableData = this.tableData.filter((item) => {
        return (
          item.city.includes(city) &&
          item.district.includes(district) &&
          item.street.includes(street) &&
          item.community.includes(community) &&
          item.residential.includes(residential)
        );
      });

    },
    submit() {
      this.tableData.push({
        city: this.form.city,
        district: this.form.region,
        street: this.form.street_name,
        community: this.form.comm_name,
        residential: this.form.redientialquarter_name,
        people_num: this.form.served_num,
        household: this.form.households_num
      });
      // 关闭对话框
      this.dialogFormVisible = false;
      // 清空表单数据
      this.form = {
        city: '',
        region: '',
        street_name: '',
        comm_name: '',
        redientialquarter_name: '',
        served_num: '',
        households_num: ''
      };
    },
    edit(){

    },
    deleteItem(){

    },
    handleSizeChange() {

    },
    handleCurrentChange() {

    },
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