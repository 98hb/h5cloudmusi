// api文件夹下 各个请求模块js,都统一来到index.js再向外导出
import { recommendMusic, newMusic } from './Home'
import { hotSearch } from './Search'
export const recommendMusicAPI = recommendMusic//请求推荐歌单的方法导出
export const newMusicAPI = newMusic//请求最新音乐的方法导出 
export const hotSearchAPI = hotSearch//请求获取热门搜索列表
