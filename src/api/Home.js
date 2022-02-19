// 文件名-尽量和逻辑(模块页面文件)统一(方便查找)
import request from "@/utils/request"// 导入网路请求方法 js文件可以省略后缀名,css不能  
//导出网络请求方法规则
/* 用此接口 , 可获取推荐歌单
=可选参数 : limit: 取出数量 , 默认为 30 (不支持 offset)
接口地址 : /personalized
调用例子 : /personalized?limit=1 */
// 首页推荐歌单
export const recommendMusi = params => request({
    url: "/personalized",
    params
})