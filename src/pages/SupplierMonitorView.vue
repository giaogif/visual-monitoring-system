<template>
    <div>
        <el-container>
            <el-aside style="margin-left: 0px;width: auto;">
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            </el-aside>
            <el-main>
                <el-row>
                    <el-button>切换全屏</el-button>
                </el-row>
                <template>
                    <div>
                        <div class="card-container">
                            <el-row :gutter="20">
                                <el-col :span="24">
                                    <el-row :gutter="1">
                                        <el-col :span="3">
                                            <div class="statistics"
                                                style="background:#409eff;width: 70%;display:flex;align-items:center;">
                                                <div class="icon-container">
                                                    <i class="el-icon-document-copy"></i>
                                                    <div class="text-container">
                                                        <span style="font-size: large;">7130.0</span>
                                                        <span class="tip">设计处理量(kg)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-col>
                                        <el-col :span="3">
                                            <div class="statistics"
                                                style="background:#E6A23C;width: 70%;display:flex;align-items:center;">
                                                <div class="icon-container">
                                                    <i class="el-icon-document-copy"></i>
                                                    <div class="text-container">
                                                        <span style="font-size: large;">7130.0</span>
                                                        <span class="tip">实际处理量(kg)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-col>
                                        <el-col :span="3">
                                            <div class="statistics"
                                                style="background:#67C23A ;width: 70%;display:flex;align-items:center;">
                                                <div class="icon-container">
                                                    <i class="el-icon-document-copy"></i>
                                                    <div class="text-container">
                                                        <span style="font-size: large;">936.0</span>
                                                        <span class="tip">投菌量(kg)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-col>
                                        <el-col :span="3">
                                            <div class="statistics"
                                                style="background:#909399;width: 70%;display:flex;align-items:center;">
                                                <div class="icon-container">
                                                    <i class="el-icon-document-copy"></i>
                                                    <div class="text-container">
                                                        <span style="font-size: large;">6930.86</span>
                                                        <span class="tip">降解量(kg)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-col>
                                        <el-col :span="3">
                                            <div class="statistics"
                                                style="background:#909399;width: 70%;display:flex;align-items:center;">
                                                <div class="icon-container">
                                                    <i class="el-icon-document-copy"></i>
                                                    <div class="text-container">
                                                        <span style="font-size: large;">5.0</span>
                                                        <span class="tip">产出量(kg)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-col>
                                        <el-col :span="3">
                                            <div class="statistics"
                                                style="background:#909399;width: 70%;display:flex;align-items:center;">
                                                <div class="icon-container">
                                                    <i class="el-icon-document-copy"></i>
                                                    <div class="text-container">
                                                        <span style="font-size: large;">5</span>
                                                        <span class="tip">实际部署(台)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-col>
                                        <el-col :span="3">
                                            <div class="statistics"
                                                style="background:#909399;width: 70%;display:flex;align-items:center;">
                                                <div class="icon-container">
                                                    <i class="el-icon-document-copy"></i>
                                                    <div class="text-container">
                                                        <span style="font-size: large;">0</span>
                                                        <span class="tip">当前运行(台)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </el-col>
                                <el-col :span="8">
                                    <el-card class="card">
                                        <div slot="header" class="card-header">月处理量监测</div>
                                        <div class="chart-container">
                                            <v-chart class="chart" :option="option" />
                                        </div>
                                    </el-card>
                                </el-col>
                                <el-col :span="8">
                                    <el-card class="card">
                                        <div slot="header" class="card-header">投料量</div>
                                        <div class="chart-container">
                                            <v-chart class="chart" :option="option2" />
                                        </div>
                                    </el-card>
                                </el-col>
                                <el-col :span="8">
                                    <el-card class="card">
                                        <div slot="header" class="card-header">日处理量监测</div>
                                        <div class="chart-container">
                                            <v-chart class="chart" :option="option3" />
                                        </div>
                                    </el-card>
                                </el-col>
                                <el-col :span="8">
                                    <el-card class="card">
                                        <div slot="header" class="card-header">负荷能力</div>
                                        <div class="chart-container">
                                            <v-chart class="chart" :option="option4" />
                                        </div>
                                    </el-card>
                                </el-col>
                                <el-col :span="8">
                                    <el-card class="card">
                                        <div slot="header" class="card-header">处理量排名</div>
                                        <div class="chart-container">
                                            <v-chart class="chart" :option="option5" />
                                        </div>
                                    </el-card>
                                </el-col>
                                <el-col :span="8">
                                    <el-card class="card">
                                        <div slot="header" class="card-header">各区域占比</div>
                                        <div class="chart-container">
                                            <v-chart class="chart" :option="option6" />
                                        </div>
                                    </el-card>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </template>
            </el-main>
        </el-container>
    </div>
</template>


<script>
export default {
    name:'SupplierMonitor',
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
                        data: [12, 20, 26, 33, 37.4, 45, 56],
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
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar'
                    }
                ]
            },
            option3: {
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
            option4: {
                legend: {},
                tooltip: {},
                dataset: {
                    source: [
                        ['product', '剩余处理量', '已处理量',],
                        ['洪山区', 86.4, 65.2],
                        ['襄城区', 72.4, 53.9]
                    ]
                },
                xAxis: { type: 'category' },
                yAxis: {},
                series: [{ type: 'bar' }, { type: 'bar' }]
            },
            option5: {
                xAxis: {
                    type: 'category',
                    data: ['洪山区', '江夏区']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [12, 20],
                        type: 'bar'
                    }
                ]
            },
            option6: {
                title: {
                    left: 'center',
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            { value: 1300, name: '洪山区' },

                            { value: 300, name: '襄城区' }
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            },
            data: [{
                label: 'A供应商',
                children: [{
                    label: '处理机1',
                }, {
                    label: '处理机2',
                }, {
                    label: '处理机3',
                }]
            }],

            defaultProps: {
                children: 'children',
                label: 'label'
            },
        }
    },
    methods: {
        handleNodeClick() {
            
        }
    }
}
</script>


<style  lang="less" scoped>
.statistics {
    display: flex;
    align-items: center;
    height: 100px;
    color: #fff;
    font-size: 14px;
    border-radius: 7px;
    padding: 0 8px;
}

.icon-container {
    display: flex;
    align-items: flex-start;
}

.icon-container i {
    font-size: 18px;
}

.icon-container .tip {
    font-size: 14px;
}

.text-container {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}

.text-container span {
    margin-top: 5px;
}

.chart-container {
    display: flex;
    justify-content: center;
}

.card-container {
    padding: 20px;
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

.el-button {
    margin-left: 16px;
    padding: 12px 20px;
    border-radius: 10px;
}

.chart {
    width: 300px;
    height: 300px;
}
</style>