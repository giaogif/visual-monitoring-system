<template>
  <div>
    <el-container>
      <el-aside style="margin-left: 0px;width:auto;">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </el-aside>
      <el-main>
        <div class="card-container">
          <el-row :gutter="20">
            <el-col :span="24">
              <el-card class="card">
                <div class="card-header1">
                  <h3 class="card-title">设备信息</h3>
                  <el-button type="text" class="fullscreen-button" @click="switchFullScreen">
                    切换全屏
                  </el-button>
                </div>
                <div class="card-content">
                  <img src="~@/assets/pic_ljcl.png" class="image">
                  <div class="text-content">
                    <el-row class="row">
                      <el-col :span="5" class="left-col">
                        <p class="text">设备状态:</p>
                        <p class="text">锁机状态:</p>
                        <p class="text">校区名称:工研院</p>
                      </el-col>
                      <el-col :span="5" class="left-col">
                        <p class="text">设备名称:处理机1</p>
                        <p class="text">设备类型:垃圾处理机</p>
                        <p class="text">设备位置:校区南门口</p>
                      </el-col>
                      <el-col :span="5" class="left-col">
                        <p class="text">设备编号:device01</p>
                        <p class="text">报警信息:</p>
                        <p class="text">气体排放:</p>
                      </el-col>
                      <el-col :span="4" class="left-col">
                        <p class="text">入料时间:2020-07-06 10:00:08</p>
                        <p class="text">出料时间:2020-07-08 00:00:00</p>
                        <p class="text">运维单位:</p>
                      </el-col>
                      <el-col :span="5" class="left-col">
                        <p class="text">剩余天数:0</p>
                        <p class="text">剩余天数:0</p>
                        <p class="text">运维人员:AAA</p>
                      </el-col>
                    </el-row>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card class="card">
                <div slot="header" class="card-header">日能耗</div>
                <div class="chart-container">
                  <v-chart class="chart" :option="option" />
                </div>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card class="card">
                <div slot="header" class="card-header">温湿度</div>
                <div class="chart-container">
                  <v-chart class="chart" :option="option2" />
                </div>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card class="card">
                <div slot="header" class="card-header">设备报警</div>
                <div class="chart-container">
                  <v-chart class="chart" :option="option3" />
                </div>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card class="card">
                <div slot="header" class="card-header">设备状态</div>
                <div class="chart-container">
                  <v-chart class="chart" :option="option4" />
                </div>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card class="card">
                <div slot="header" class="card-header">日搅拌</div>
                <div class="chart-container">
                  <v-chart class="chart" :option="option5" />
                </div>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card class="card">
                <div slot="header" class="card-header">投菌信息</div>
                <div class="chart-container">
                  <el-table :data="tableData" border fit>
                    <el-table-column prop="date" label="投菌时间" align="center" />
                    <el-table-column prop="dosage" label="投菌量" align="center" />
                    <el-table-column prop="operator" label="操作员" align="center" />
                  </el-table>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
</template>


<script>
export default {
  name:'DevStatusView',
  data() {
    return {
      option: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [1, 1.5, 2, 3, 3.5, 5,6],
            type: 'line'
          }
        ]
      },
      option2: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [60, 45, 70, 80, 90, 85, 96],
            type: 'bar'
          }
        ]
      },
      option3: {
        xAxis: {
          type: 'value',
        },
        yAxis: {
          type: 'category',
          data: ['07-11', '07-12', '07-13', '07-14', '07-15', '07-16']
        },
        tooltip: {
          trigger: 'axis', // 触发类型为轴
          axisPointer: {
            type: 'shadow' // 提示框阴影效果
          }
        },
        legend: {},// 图例，默认为空
        grid: {
          left: '3%',// 图表左边距
          right: '4%',// 图表右边距
          bottom: '16%',// 图表底边距
          containLabel: true // 图表底边距
        },
        series: [
          {
            name: '设备报警次数',
            type: 'bar',
            data: [5, 6, 8, 4, 18, 12]
          }
        ]
      },
      option4: {
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ['product', '剩余处理量', '已处理量',],
            ['处理机1', 86.4, 65.2],
            ['处理机2', 72.4, 53.9]
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        series: [{ type: 'bar' }, { type: 'bar' }]
      },
      option5: {
        xAxis: {
          type: 'category',
          data: ['处理机1', '处理机2']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200],
            type: 'bar'
          }
        ]
      },
      tableData: [
        {
          date: '2020-07-06 10:00:08',
          dosage: '108',
          operator: 'AAA'
        },
        {
          date: '2020-07-06 10:00:07',
          dosage: '107',
          operator: 'AAA'
        },
        {
          date: '2020-07-06 10:00:06',
          dosage: '106',
          operator: 'AAA'
        },
        {
          date: '2020-07-06 10:00:05',
          dosage: '105',
          operator: 'AAA'
        },
        {
          date: '2020-07-06 10:00:04',
          dosage: '104',
          operator: 'AAA'
        }
      ],
      data: [{
        label: '武汉',
        children: [{
          label: '江夏区',
          children: [{
            label: '高新大道',
            children: [{
              label: '工研产业园',
              children: [{
                label: '工研院'
              }, {
                label: '宁安村',
              }, {
                label: '墨香楼',
              }, {
                label: '耀光星城',
              }]
            }, {
              label: '文化人道',
              children: [{
                label: '青龙山社区',
                children: [{
                  label: '青龙山新村'
                }, {
                  label: '王官庄小区',
                }, {
                  label: '江南学府',
                }]
              }]
            }
            ]
          }]
        }, {
          label: '洪山区',
          children: [{
            label: '珞瑜东路',
            children: [{
              label: '华科',
              children: [{
                label: '华科园区',
              }, {
                label: '锦绣雷',
              }]
            }, {
              label: '林业新村社区',
              children: [{
                label: '中区建委',
              }, {
                label: '林业小区',
              }]
            }]
          }, {
            label: '大集街道',
            children: [{
              label: '大集社区',
            }, {
              label: '恒大绿洲',
            }, {
              label: '大集小区',
            }, {
              label: '怡东花园',
            }]
          }
          ]
        }
        ]
      },],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
    };
  },
  methods: {
    switchFullScreen() {

    },
    handleNodeClick() {

    }
  }
}
</script>

<style lang="less" scoped>
.card-header1 {
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-weight: bold;
  height: 40px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.left-col {
  padding-right: 20px;
  flex-basis: calc(20% - 20px);
}

.text-content {
  margin-left: 100px;
  width: calc(100% - 100px);
}

.card-content {
  display: flex;
  align-items: center;
  position: relative;
}

.image {
  width: 80px;
  height: 50px;
  position: absolute;
  bottom: 0px;
}

.text {
  margin: 0;
  text-align: left;
}

.chart-container {
  display: flex;
  justify-content: center;
  height: 300px;
}

.card {
  margin-bottom: 20px;
  overflow: hidden;
  text-align: center;
}

.card-header {
  font-weight: bold;
  padding: 10px;
  background-color: #f5f7fa;
}

.container {
  display: flex;
  justify-content: center;
}

.el-table {
  width: 100%;
}

.text {
  margin: 0;
  text-align: left;
}

.left-col {
  padding-right: 8px;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
}

.fullscreen-button {
  font-size: 14px;
  padding: 4px 4px;
  background-color: gray;
}

.chart {
  width: 300px;
  height: 300px;
}
</style>