/**
 * @author: SEKin ;
 * @Date: 2020-08-16 17:42:09 ;
 * @description:  路由管理;
 * @Last Modified time: 2020-08-16 17:42:09 ;
 */
import * as VueRouter from "vue-router"

const router = VueRouter.createRouter({
  history: VueRouter.createMemoryHistory(),
  routes: [
    // 动态路径参数 以冒号开头
  ]
})

export {
  router
}
