import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/login/LoginView.vue'
import MainModule from '../views/frame/MainModule.vue'
import AlarmView from '../views/operate/AlarmView.vue'
import DevInforView from '../views/operate/DevInforView.vue'
import RtMonitorView from '../views/operate/RtMonitorView.vue'
import UserAdminView from '../views/admin/UserAdminView.vue'
import DeptAdminView from '../views/admin/DeptAdminView.vue'
import DataDicAdminView from '../views/admin/DataDicAdminView.vue'
import CommunityAdminView from '../views/admin/CommunityAdminView.vue'
import DeviceAdminView from '../views/admin/DeviceAdminView.vue'
import RegionAdminView from '../views/admin/RegionAdminView.vue'
import RightsAdminView from '../views/admin/RightsAdminView.vue'
import DevStatusView from '../views/operate/DevStatusView.vue'
import SupplierMonitorView from '../views/operate/SupplierMonitorView.vue'
import MapShow from '@/views/map/MapShow.vue'

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
