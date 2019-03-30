import Koa from 'koa'
import routes from './router'
import templating from './middleware/templating'

const app = new Koa()

app.use(templating)
app.use(routes.routes(), routes.allowedMethods())

app.listen(9000, () => {
  console.log(`node服务已经启动, 请访问 http://localhost:9000`)
})
