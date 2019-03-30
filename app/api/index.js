import axios from 'axios'

export const getDetailById = async id => {
  // let resp = await axios.get(`/api/topic/${id}`)
  let resp = await axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
  return resp.data.data
}

export const getTopics = async () => {
  // let resp = await axios.get(`/api/topic`)
  let resp = await axios.get(`https://cnodejs.org/api/v1/topics`)
  return resp.data.data
}
