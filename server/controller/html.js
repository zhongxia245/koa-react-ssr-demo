import Api from '../service/cnode'

export default {
  home: async (ctx, next) => {
    ctx.render({
      home: {
        title: '我是从node中获取的数据'
      }
    })
    next()
  },
  list: async (ctx, next) => {
    let data = await Api.topic()
    ctx.render({
      list: {
        ssr: true,
        data: data
      }
    })
    next()
  },
  detail: async (ctx, next) => {
    const { id } = ctx.params
    let data = await Api.detail(id)
    ctx.render({
      detail: {
        ssr: true,
        data: data
      }
    })
    next()
  }
}
