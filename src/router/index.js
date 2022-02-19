import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/Layout"
import Home from "@/views/Home"
import Play from "@/views/Play"
import Search from "@/views/Search"
Vue.use(VueRouter)
const routes = [//路由规则
    {
        path: "/",
        redirect: "/layout"
    },
    {
        path: "/layout",
        component: Layout,//给它二级路由挂载点
        redirect: "/layout/home",
        children: [
            {
                path: "home",
                component: Home
            },
            {
                path: "search",
                component: Search
            }
        ]
    }, {
        path: "/play",
        component: Play
    }
]
const router = new VueRouter({//路由对象
    routes
}
)
export default router//导出路由对象