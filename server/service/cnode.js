import axios from 'axios'

export default {
  topic: async () => {
    const resp = await axios.get('https://cnodejs.org/api/v1/topics')
    return resp.data.data
  },
  detail: async id => {
    const resp = await axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
    return resp.data.data
  }
}
