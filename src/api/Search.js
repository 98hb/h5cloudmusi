/* 热搜列表(简略)
说明 : 调用此接口,可获取热门搜索列表
接口地址 : /search/hot
调用例子 : /search/hot */
import request from "@/utils/request"
export const hotSearch = params => request({
    url: "/search/hot",
    params
})