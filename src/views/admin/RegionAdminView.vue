<template>
  <div>
    <el-form :inline="true" :model="formRegion">
      <el-form-item label="区域名称">
        <el-input v-model="formRegion.region" placeholder="请输入完整的区域名称"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="search">查询</el-button>
      </el-form-item>
    </el-form>
    <el-row>
      <el-button type="primary" @click="add">新增</el-button>
      <el-button type="primary" @click="modify">修改名称</el-button>
      <el-button type="danger" @click="del">删除</el-button>
    </el-row>
    <el-cascader-panel :options="options"></el-cascader-panel>
  </div>
</template>
<script>


export default {
  name:'RegionAdminView',
  data() {
    return {
      formRegion: {
        region: ""
      },
      options: [{
        value: 'wuhan',
        label: '武汉',
        children: [{
          value: 'jiangxiadistrict',
          label: '江夏区',
          children: [{
            value: 'fozuling',
            label: '佛祖岭街道办事处',
            children: [{
              value: 'liangshantoucommunity',
              label: '梁山头社区',
              children: [{
                value: 'liangshantou',
                label: '梁山头',
              }, {
                value: 'liduyuan',
                label: '丽都苑'
              }]
            }, {
              value: 'fozulincommunity',
              label: '佛祖岭社区',
            }]
          }, {
            value: 'binhu',
            label: '滨湖街道办事处'
          }]
        }, {
          value: 'dongxihudistrict',
          label: '东西湖区',
        }, {
          value: 'hongshandistrict',
          label: '洪山区',
        }, {
          value: 'caidiandistrict',
          label: '蔡甸区',
        }, {
          vlaue: 'huangpidistrict',
          label: '黄陂区',
        }]
      }]
    }
  },
  methods: {
    handleNodeClick() {
    
    },
    search(){

    },
    add(){

    },
    modify(){

    },
    del(){
      
    }
  },
}
</script>

<style lang="less" scoped>
.el-aside {
  color: #333;
}
</style>