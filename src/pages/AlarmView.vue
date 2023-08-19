<template>
    <div>
        <el-container>
            <el-aside style="margin-left: 0px; width: auto;">
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            </el-aside>
            <el-main>
                <div class="card-container">
                    <div class="card-content">
                        <span>开始时间</span>
                        <el-date-picker v-model="value1" type="datetime" placeholder="请选择开始日期时间" />
                    </div>
                    <div class="card-content">
                        <span>结束时间</span>
                        <el-date-picker v-model="value2" type="datetime" placeholder="请选择结束日期时间" />
                    </div>
                    <div class="card-content">
                        <el-button type="primary" class="search-btn" @click="handleSearch">查询</el-button>
                    </div>
                </div>
                <!-- 表格和分页组件 -->
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column prop="date" label="报警发生时间" align="center" />
                    <el-table-column prop="name" label="报警处理时间" align="center" />
                    <el-table-column prop="address" label="报警内容" align="center" />
                </el-table>
                <div class="pagination-wrapper">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage4" layout="total, sizes, prev, pager, next, jumper" :total="100">
                    </el-pagination>
                </div>
            </el-main>
        </el-container>
    </div>
</template>


<script>
export default {
    name:'AlarmView',
    data() {
        return {
            value1: '',
            value2: '',
            tableData: [
                {
                    date: '2016-07-17 00:46:30',
                    name: '2016-07-17 01:46:31',
                    address: '液压电机过载报警',
                },
                {
                    date: '2016-07-17 00:46:32',
                    name: '2016-07-17 01:46:33',
                    address: '液压电机过载报警',
                },
                {
                    date: '2016-07-17 00:46:34',
                    name: '2016-07-17 01:46:35',
                    address: '液压电机过载报警',
                },
                {
                    date: '2016-07-17 00:46:36',
                    name: '2016-07-17 01:46:37',
                    address: '液压电机过载报警',
                },
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
        handleNodeClick() {
        },
        handleSearch() {
            // 处理查询按钮点击事件
        },
        handleSizeChange() {
            // 处理每页显示条数变化
        },
        handleCurrentChange() {
            // 处理当前页码变化
        }
    }
}

</script>


<style>
.card-container {
    display: flex;
    margin-bottom: 20px;
}

.card-content {
    padding: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.el-table th.gutter,
.el-table td.gutter {
    text-align: center;
}

.demo-datetime-picker {
    display: flex;
    width: 100%;
    padding: 0;
}

.demo-datetime-picker .block {
    padding: 30px 0;
    text-align: center;
    flex: 1;
    display: flex;
    align-items: center;
}

.date-picker-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.search-btn {
    margin-left: 10px;
    height: 32px;
    line-height: 1;
    padding: 4px 10px;
}

.pagination-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
</style>