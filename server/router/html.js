import Router from 'koa-router'
import htmlControl from '../controller/html'

let router = new Router()

router.get('/', htmlControl.home)
router.get('/article', htmlControl.article)
router.get('/article/:id', htmlControl.articleDetail)
router.get('/example', htmlControl.example)

export default router
