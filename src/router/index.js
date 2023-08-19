import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../pages/LoginView.vue'
import MainModule from '../components/MainModule.vue'
import AlarmView from '../pages/AlarmView.vue'
import DevInforView from '../pages/DevInforView.vue'
import RtMonitorView from '../pages/RtMonitorView.vue'
import UserAdminView from '../pages/UserAdminView.vue'
import DeptAdminView from '../pages/DeptAdminView.vue'
import DataDicAdminView from '../pages/DataDicAdminView.vue'
import CommunityAdminView from '../pages/CommunityAdminView.vue'
import DeviceAdminView from '../pages/CommunityAdminView.vue'
import RegionAdminView from '../pages/RegionAdminView.vue'
import RightsAdminView from '../pages/RightsAdminView.vue'
import DevStatusView from '../pages/DevStatusView.vue'
import SupplierMonitorView from '../pages/SupplierMonitorView.vue'
import MapShow from '../pages/MapShow.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    //主路由
    {
      path: '/',
      component: MainModule,
      redirect: 'rtmonitor',
      //子路由
      children: [
        { path: 'rtmonitor', component: RtMonitorView }, //首页
        { path: 'devstatus', component: DevStatusView }, //设备状态
        { path: 'useradmin', component: UserAdminView }, //用户管理
        { path: 'deptadmin', component: DeptAdminView }, //部门管理
        { path: 'datadicadmin', component: DataDicAdminView },//数据字典管理
        { path: 'communityadmin', component: CommunityAdminView },//社区管理
        { path: 'deviceadmin', component: DeviceAdminView },//设备管理
        { path: 'regionadmin', component: RegionAdminView }, //区域管理
        { path: 'rightsadmin', component: RightsAdminView },//权限管理
        { path: 'alarm', component: AlarmView },//报警管理
        { path: 'devinfor', component: DevInforView },//设备信息
        { path: 'devstatus', component: DevStatusView },//设备状态
        { path: 'suppliermonitor', component: SupplierMonitorView },//供应商监控
        { path: 'mapshow',component: MapShow}  //地图显示
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },

  ]
})



export default router
