import CnodeApi from '../service/cnode'
import { getReadme } from '../service/markdown'

export default {
  home: async (ctx, next) => {
    let html = await getReadme()
    ctx.render({ home: { ssr: true, data: html } })
    next()
  },
  article: async (ctx, next) => {
    let data = await CnodeApi.topic()
    ctx.render({
      list: {
        ssr: true,
        data: data
      }
    })
    next()
  },
  articleDetail: async (ctx, next) => {
    const { id } = ctx.params
    let data = await CnodeApi.detail(id)
    ctx.render({
      detail: {
        ssr: true,
        data: data
      }
    })
    next()
  },
  example: async (ctx, next) => {
    ctx.render({
      detail: {
        ssr: true
      }
    })
    next()
  }
}
