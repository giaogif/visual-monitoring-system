<template>
    <div>
        <el-container>
            <el-aside style="margin-left: 0px;width:auto;">
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            </el-aside>
            <el-main class="custom-el-main">
                <el-row>
                    <el-button @click="switchFullScreen">切换全屏</el-button>
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
                                        <div slot="header" class="card-header">日处理量监测</div>
                                        <div class="chart-container">
                                            <v-chart class="chart" :option="option2" />
                                        </div>
                                    </el-card>
                                </el-col>
                                <el-col :span="8">
                                    <el-card class="card">
                                        <div slot="header" class="card-header">月气体排放超标时长</div>
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
                                        <div slot="header" class="card-header">投菌量</div>
                                        <div class="chart-container">
                                            <v-chart class="chart" :option="option5" />
                                        </div>
                                    </el-card>
                                </el-col>
                                <el-col :span="8">
                                    <el-card class="card">
                                        <div slot="header" class="card-header">日能耗</div>
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
    name:'DeinforView',
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
                        data: [1, 1.5, 2, 3, 3.5, 5,6],
                        type: 'line'
                    }
                ]
            },
            option3: {

                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['硫化氢浓度实时值每天报警时长', '氨气浓度实时值每天报警时长',]
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '硫化氢浓度实时值每天报警时长',
                        type: 'line',
                        stack: 'Total',
                        data: [12, 13, 10, 1, 9, 23]
                    },
                    {
                        name: '氨气浓度实时值每天报警时长',
                        type: 'line',
                        stack: 'Total',
                        data: [22, 18, 19, 23, 20, 33]
                    },



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
            option6: {
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

<style lang="css" scoped>
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

.chart-container {
    display: flex;
    justify-content: center;
}

.text-container span {
    margin-top: 5px;
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
    margin-left: 15px;
    padding: 12px 20px;
    border-radius: 10px;
}

.chart {
    width: 300px;
    height: 300px;
}
</style>