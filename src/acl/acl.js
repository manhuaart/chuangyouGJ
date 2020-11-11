import Vue from 'vue'
import { AclInstaller, AclCreate, AclRule } from 'vue-acl'
import router from '@/router'
Vue.use(AclInstaller)
 
let initialRole = 'p6'
if(localStorage.getItem('levelCy')){
    initialRole = localStorage.getItem('levelCy')
}
export default new AclCreate({
  initial: initialRole, //首次许可，用于使用您的应用启动
  notfound: '/pages/not-authorized',
  router,
  acceptLocalRules: true, //如果可以在vue组件中定义新规则
//定义用于路由和任何组件访问的全局规则
  globalRules: {
    p6: new AclRule('p6').generate(),  //只有leavCy为p6能看到的
    p5: new AclRule('p5').or('p6').or('p0').generate(), //只有leavCy为p1或者p0能看到的
    p4: new AclRule('p4').or('p5').or('p6').or('p0').generate(),
    p3: new AclRule('p3').or('p4').or('p5').or('p6').or('p0').generate(),
    p2: new AclRule('p2').or('p3').or('p4').or('p5').or('p6').or('p0').generate(), 
    p1: new AclRule('p1').or('p2').or('p3').or('p4').or('p5').or('p6').or('p0').generate(),   
    p0: new AclRule('p0').or('p1').or('p2').or('p3').or('p4').or('p5').or('p6').generate(),  
    p56:new AclRule('p5').or('p6').generate(),  
  }
})
