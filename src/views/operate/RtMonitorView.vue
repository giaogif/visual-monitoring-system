<template>
    <div>
        <el-container>
            <el-aside style="margin-left: 0px;width: auto;">
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            </el-aside>
            <el-main>
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
                                     
                                            <map-show></map-show>
                                        
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
import MapShow from '../map/MapShow.vue';
export default {
  components: { MapShow },
  name:'RtMonitorView',
    data() {
        return {
            option: {
                xAxis: {
                    type: "category",
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                },
                yAxis: {
                    type: "value"
                },
                series: [
                    {
                        data: [12, 20, 26, 33, 37.4, 45, 56],
                        type: "line"
                    }
                ]
            },
            option3: {
                xAxis: {
                    type: "category",
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                },
                yAxis: {
                    type: "value"
                },
                series: [
                    {
                        data: [1, 1.5, 2, 3, 3.5, 5,6],
                        type: "line"
                    }
                ]
            },
            option4: {
                legend: {},
                tooltip: {},
                dataset: {
                    source: [
                        ["product", "剩余处理量", "已处理量",],
                        ["处理机1", 86.4, 65.2],
                        ["处理机2", 72.4, 53.9]
                    ]
                },
                xAxis: { type: "category" },
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [{ type: "bar" }, { type: "bar" }]
            },
            option5: {
                xAxis: {
                    type: "category",
                    data: ["处理机1", "处理机2"]
                },
                yAxis: {
                    type: "value"
                },
                series: [
                    {
                        data: [6, 3],
                        type: "bar"
                    }
                ]
            },
            option6: {
                title: {
                    left: "center",
                },
                tooltip: {
                    trigger: "item"
                },
                legend: {
                    orient: "vertical",
                    left: "left"
                },
                series: [
                    {
                        name: "Access From",
                        type: "pie",
                        radius: "50%",
                        data: [
                            { value: 1300, name: "处理机1" },
                            { value: 300, name: "处理机2" }
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)"
                            }
                        }
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
    methods:{
        switchFullScreen(){

        },
        handleNodeClick(){

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
    border-radius:7px;
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
    height: 400px;
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
.chart{
    width: 300px;
    height: 300px;
}
</style>