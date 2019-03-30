import axios from 'axios'

export default {
  topic: async (ctx, next) => {
    const resp = await axios.get('https://cnodejs.org/api/v1/topics')
    ctx.body = resp.data.data
  },
  detail: async (ctx, next) => {
    const { id } = ctx.params
    console.log('detail:', id)
    const resp = await axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
    ctx.body = resp.data.data
  }
}
