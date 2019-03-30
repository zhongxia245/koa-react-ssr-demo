import Router from 'koa-router'
import htmlControl from '../controller/html'

let router = new Router()

router.get('/', htmlControl.home)
router.get('/list', htmlControl.list)
router.get('/detail/:id', htmlControl.detail)

export default router
