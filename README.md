# koa-react-ssr-demo

> 更新时间：2019-03-30 23:48:42

> 学习的文章地址：https://juejin.im/post/5c90b4115188252d9559136c
> 学习使用 react-ssr 的一个 demo 项目，主要用于学习，理解基础的 SSR 知识点，而不是注重于实战。

## 零、GET START

```bash
# 下载项目
git clone https://github.com/zhongxia245/koa-react-ssr-demo.git

# 安装依赖
npm install

# 启动 client 和 server 端
npm start / npm run dev

# 访问 http://localhost:9000

# 构建（TODO）
npm run build

# 部署（TODO）
npm run deploy

# 使用 pm2 进行部署
npm run build 
pm2 start pm2.json

# 更新部署
sh deploy.sh

```

## 一、创建 React 浏览器端开发环境

- [x] 配置 webpack 构建环境
- [x] 安装 react ,react-dom 包
- [x] 增加 less，img， html 资源的家在
- [x] 配置 htmlWebpackPlugin 自动生成 html
- [x] 增加 webpackDevServer 的开发模式，增加热更新

## 二、构建 Koa SSR 的基本环境

- [x] 配置最基础的 KOA web 服务器
- [x] 增加 Koa 对 jsx 语法的支持，以及 es6 的支持
- [x] 使用 `renderToString` 渲染一个最基本的 React 组件
- [x] koa ssr 下的路由处理

## 三、路由处理

- [x] react 增加 react-router 进行路由处理
- [x] koa 增加 koa-router 进行路由处理

> 此时发现，访问客户端页面，页面跳转不会刷新，但是访问 `koa` 页面，页面跳转会刷新。
> 这个是因为页面没有加载 js，因为跳转不是采用 `react` 的 路由跳转。
> 新增一个 `server.html` 加载入 js 文件

- [x] 在 koa 里面进行路由处理，实现 koa ssr 页面跳转，不刷新

到这一步结束，都是静态页面的 `SSR` ，但是开发中，不可能是纯静态的，否则直接写静态就可以了，也就没有必要 `SSR` 了。

下面开发尝试异步加载数据。

## 四、SSR 中的数据请求

- [x] react 中添加 redux 的使用
  > `react` 中操作数据无非两种方式 `state` 和 `props` ，我们在 `node` 中肯定是没办法给组件设置 `state` 的，所以只能通过 `props` 传进去，并且我们的数据还要做到前后端同步，不然你就光渲染出了 `html` ，数据没给前端这样也不行啊。而 `redux` 刚好满足这两点需求。
- [x] ssr 使用 redux , 修改 templating 中间件即可
  > 存在问题： 刚开始加载的是 ssr 注入的数据，但是 js 加载完，js 又重新初始化了 store（可以修改 chrome 的网络模式，改成 slow 3G， 效果就很明显了）

## 五、目前存在的问题

- [ ] 再 SSR 下修改页面内容，没有自动刷新
- [ ] 404 处理
- [ ] SSR 错误处理不明显
- [ ] 部署问题
- [ ] 服务端直出，因为 CSS 还没有加载，会闪烁一下

## 六、TODO

- [ ] 使用 Next.js 重构
- [ ] 采用 egg.js 替换 Koa
- [ ] 封装一个脚手架
