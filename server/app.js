import path from 'path'
import Koa from 'koa'
import routes from './router'
import templating from './middleware/templating'

const app = new Koa()

const IS_DEV = process.env.NODE_ENV === 'development'
let templatePath = path.join(__dirname, '../template/server.html')

if (!IS_DEV) {
  templatePath = path.join(__dirname, '../dist/index.html')
  app.use(
    require('koa-static')(path.join(__dirname, '../dist'), {
      defer: true
    })
  )
}

app.use(templating(templatePath))
app.use(routes.routes(), routes.allowedMethods())

app.listen(9000, () => {
  console.log(`node服务已经启动, 请访问 http://localhost:9000`)
})
