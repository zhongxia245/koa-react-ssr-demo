import { getDetailById, getTopics } from '../../api'
import { GET_TOPIC_DETAIL, GET_TOPIC } from '../constants/cnode'

// 获取文章详情
export const actionGetTopicDetail = id => {
  return async dispatch => {
    let data = await getDetailById(id)
    dispatch({ type: GET_TOPIC_DETAIL, payload: data })
  }
}

export const actionGetTopic = () => {
  return async dispatch => {
    let data = await getTopics()
    dispatch({ type: GET_TOPIC, payload: data })
  }
}
