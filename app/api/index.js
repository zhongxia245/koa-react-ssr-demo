import axios from 'axios'

export const getDetailById = async id => {
  let resp = await axios.get(`/api/topic/${id}`)
  return resp.data
}

export const getTopics = async () => {
  let resp = await axios.get(`/api/topic`)
  return resp.data
}
