import Axios from 'axios'

const axios = Axios.create()
axios.interceptors.response.use(resp => {
  return resp.data
})

export const getDetailById = async id => {
  // let resp = await axios.get(`/api/topic/${id}`)
  let result = await axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
  return result.data
}

export const getTopics = async () => {
  // let resp = await axios.get(`/api/topic`)
  let result = await axios.get(`https://cnodejs.org/api/v1/topics`)
  return result.data
}
