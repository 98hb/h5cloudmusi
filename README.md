# h5music

###本地接口

cloud_musicAPI[接口地址](https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e5%ae%89%e8%a3%85)

alternate-address[备用地址](https://github.com/Binaryify/NeteaseCloudMusicApi/tree/master/docs)

###运行依赖

##### `dependencies`运行代码时需要的依赖项

```json
"dependencies": {
    "axios": "^0.21.1",
    "core-js": "^3.6.5",
    "postcss": "^8.2.13",
    "postcss-pxtorem": "5.1.1",
    "vant": "^2.12.15",
    "vue": "^2.6.11",
    "vue-router": "^3.5.1"
  }
```

###开发依赖

##### `devDependencies`开发工作流程中的某些时候需要的依赖项，但在运行代码时不需要(生产环境下的包依赖)

```json

  "devDependencies": {
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-eslint": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "babel-eslint": "^10.1.0",
    "babel-plugin-import": "^1.13.3",
    "eslint": "^6.7.2",
    "eslint-plugin-vue": "^6.2.2",
    "vue-template-compiler": "^2.6.11"
  }
```

###yarn add 包依赖

```bash
yarn global add <package...>全局安装包依赖。

yarn add global <package...>本地安装包依赖。

yarn add axios@0.21.1 vant@2.12.15 vue-router@3.5.1 postcss@8.2.13	postcss-pxtorem@5.1.1

yarn add babel-plugin-import@1.13.3  -D

```

###静态页面铺设

```bash
views/Layout/index.vue  -	负责布局(上下导航 - 中间二级路由切换首页和搜索页面)
views/Home/index.vue    -	首页页面
views/Search/index.vue  -	搜索页面
views/Play/index.vue	-	播放页面
```


###vue-router
```bash
下载/引入/注册/规则/路由对象/注入/显示

改变url的hash值路径,导致对应组件显示

路由配置, 显示不同路由页面

APP.vue 一级路由挂载点

Layout.vue 二级路由挂载点  

http://localhost:8080/#/layout/home  二级路由显示页面
http://localhost:8080/#/layout/search 二级路由显示页面
```

### tabBar集成路由

~~~ 
vant 组件库 点击tabBar实现跳转时替换当前页面历史
~~~

### route.meta

~~~vue
watch :(){}监听路由信息
 data() {
    return {
      当前变量: this.$route.meta.路由变量, //默认显示路由meta 信息
    };
  },
    watch: {
    $route() {
      this.当前变量 = this.$route.meta.路由变量; //点击切换路由同步更改路由meta 信息
    },
  },
~~~

### axios

~~~js
// 网络请求
import axios from "axios";
axios.defaults.baseURL = "http://localhost:xxx"
export default axios
~~~

###async await 

[5.3 ES6 async 函数地址](https://www.runoob.com/w3cnote/es6-async.html)

~~~js
import { recommendMusiAPI } from "@/api"
async function fn() {
  const res = await recommendMusiAPI()
  console.log(res);
}
fn()//main.js 测试返回推荐音乐列表
~~~



