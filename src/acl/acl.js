import Vue from 'vue'
import { AclInstaller, AclCreate, AclRule } from 'vue-acl'
import router from '@/router'
 
Vue.use(AclInstaller)
 
let initialRole = 'admin'
if(localStorage.getItem('userRole')){
    initialRole = localStorage.getItem('userRole')
}
export default new AclCreate({
  initial: initialRole, //首次许可，用于使用您的应用启动
  notfound: '/pages/not-authorized',
  router,
  acceptLocalRules: true, //如果可以在vue组件中定义新规则
//定义用于路由和任何组件访问的全局规则
  globalRules: {
    admin: new AclRule('admin').generate(),  
    editor: new AclRule('editor').or('admin').generate(),
    // public: new AclRule('public').or('admin').or('editor').generate(),
  }
})
