<template>
  <div>
    <el-form :inline="true" :model="formDevice" class="demo-form-inline">
      <el-form-item label="地址">
        <div class="block">
          <el-cascader v-model="formDevice.value" :options="options" @change="handleChange"></el-cascader>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询设备</el-button>
      </el-form-item>
    </el-form>
    <el-row>
      <el-button type="primary" size="small" @click="dialogFormVisible = true" style="margin-right: 10px">新增设备</el-button>
      <el-dialog title="新增设备" :visible.sync="dialogFormVisible" :width="dialogWidth">
        <el-form :model="form">
          <el-row>
            <el-col :span="12">
              <el-form-item label="设备编号" :label-width="formLabelWidth">
                <el-input v-model="form.dev_num" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="资产编号" :label-width="formLabelWidth">
                <el-input v-model="form.asset_num" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="设备类型" :label-width="formLabelWidth">
                <el-input v-model="form.dev_type" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="设备名称" :label-width="formLabelWidth">
                <el-input v-model="form.dev_name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="所属城市" :label-width="formLabelWidth">
                <el-input v-model="form.home_city" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="所属行政区" :label-width="formLabelWidth">
                <el-input v-model="form.administrative_district" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="所属街道" :label-width="formLabelWidth">
                <el-input v-model="form.street" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="所属社区" :label-width="formLabelWidth">
                <el-input v-model="form.community" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="所属小区" :label-width="formLabelWidth">
                <el-input v-model="form.residential_quarter" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="供应商" :label-width="formLabelWidth">
                <el-input v-model="form.supplier" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="日处理能力" :label-width="formLabelWidth">
                <el-input v-model="form.processing_ability" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="状态" :label-width="formLabelWidth">
                <el-input v-model="form.state" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
        </div>
      </el-dialog>
      <el-button type="primary" size="small" @click="modify">修改</el-button>
      <el-button type="danger" size="small" @click="del">删除</el-button>
      <el-button type="primary" size="small" @click="enable">启用</el-button>
      <el-button type="primary" size="small" @click="stop">停用</el-button>
      <el-button type="primary" size="small" @click="seleceOption">选择地点</el-button>
    </el-row><br>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="device_id" label="设备编号" align="center"></el-table-column>
      <el-table-column prop="asset_num" label="资产编号" align="center"></el-table-column>
      <el-table-column prop="device_type" label="设备类型" align="center"></el-table-column>
      <el-table-column prop="device_name" label="设备名称" align="center"></el-table-column>
      <el-table-column prop="city" label="所属城市" align="center"></el-table-column>
      <el-table-column prop="district" label="所属行政区" align="center"></el-table-column>
      <el-table-column prop="street" label="所属街道" align="center"></el-table-column>
      <el-table-column prop="community" label="所属社区" align="center"></el-table-column>
      <el-table-column prop="residential" label="所属小区" align="center"></el-table-column>
      <el-table-column prop="vendor" label="供应商" align="center"></el-table-column>
      <el-table-column prop="daily_capacity" label="日处理能力" align="center"></el-table-column>
      <el-table-column prop="state" label="状态" align="center"></el-table-column>
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
  name:'DeviceAdminView',
  data() {
    return {
      tableData: [{
        device_id: "device02",
        asset_num: "070802",
        device_type: "垃圾处理机",
        device_name: "处理机2",
        city: "武汉",
        district: "洪山区",
        street: "大集街道",
        community: "大集社区",
        residential: "大集小区",
        vendor: "A供应商",
        daily_capacity: "70",
        state: "启用",
      }, {
        device_id: "device02",
        asset_num: "070802",
        device_type: "垃圾处理机",
        device_name: "处理机2",
        city: "武汉",
        district: "洪山区",
        street: "大集街道",
        community: "大集社区",
        residential: "大集小区",
        vendor: "A供应商",
        daily_capacity: "70",
        state: "启用",
      }, {
        device_id: "device02",
        asset_num: "070802",
        device_type: "垃圾处理机",
        device_name: "处理机2",
        city: "武汉",
        district: "洪山区",
        street: "大集街道",
        community: "大集社区",
        residential: "大集小区",
        vendor: "A供应商",
        daily_capacity: "70",
        state: "启用",
      }, {
        device_id: "device02",
        asset_num: "070802",
        device_type: "垃圾处理机",
        device_name: "处理机2",
        city: "武汉",
        district: "洪山区",
        street: "大集街道",
        community: "大集社区",
        residential: "大集小区",
        vendor: "A供应商",
        daily_capacity: "70",
        state: "启用",
      }],
      formDevice: {
        value: "",
      },
      dialogFormVisible: false,
      dialogWidth: "30%",
      form:
      {
        dev_num: '',
        asset_num: '',
        dev_type: '',
        dev_name: '',
        home_city: '',
        street: '',
        community: '',
        residential_quarter: '',
        supplier: '',
        processing_ability: '',
        state: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    modify() {
    },
    del() {
    },
    enable() {
    },
    stop() {
    },
    seleceOption() {
    },
    handleClick() {
    },
    onSubmit() {
    },
    handleSizeChange() {
    },
    handleCurrentChange() {
    }

  },
}
</script>


<style lang="less" scoped>
.el-aside {
  color: #333;
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