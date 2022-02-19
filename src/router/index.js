// 路由依赖
import Vue from "vue";
import VueRouter from "vue-router";//导入依赖包不用写路径
import Layout from "@/views/Layout"//@是src目录寻找
import Home from "@/views/Home"//@是src目录寻找
import Play from "@/views/Play"//@是src目录寻找
import Search from "@/views/Search"//@是src目录寻找
Vue.use(VueRouter)
const routes = [//路由规则
    {
        path: "/",//起始路径
        redirect: "/layout"//强制定向目标路径
    },
    {
        path: "/layout",
        component: Layout,//给它二级路由挂载点
        redirect: "/layout/home",
        children: [//二级路页面
            {
                path: "home",//起始路径
                component: Home//注册页面
            },
            {
                path: "search",//起始路径
                component: Search//注册页面
            }
        ]
    }, {
        path: "/play",//起始路径
        component: Play//注册页面
    }
]
const router = new VueRouter({//路由对象
    routes
}
)
export default router//导出路由对象