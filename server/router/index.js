import Router from 'koa-router'
import apiRouter from './api'
import htmlRouter from './html'

const routes = new Router()

routes.use(apiRouter.routes())
routes.use(htmlRouter.routes())

export default routes
