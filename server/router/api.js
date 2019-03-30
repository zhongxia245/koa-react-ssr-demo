import Router from 'koa-router'
import ApiController from '../controller/api'

let router = new Router({
  prefix: '/api'
})
router.get('/topic', ApiController.topic)
router.get('/topic/:id', ApiController.detail)

export default router
