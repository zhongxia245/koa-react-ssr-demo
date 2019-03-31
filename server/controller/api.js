import CnodeApi from '../service/cnode'
import { getReadme } from '../service/markdown'

export default {
  topic: async (ctx, next) => {
    const data = await CnodeApi.topic()
    ctx.body = data
  },
  detail: async (ctx, next) => {
    const { id } = ctx.params
    const data = await CnodeApi.detail(id)
    ctx.body = data
  },
  readme: async (ctx, next) => {
    const html = await getReadme()
    ctx.body = html
  }
}
