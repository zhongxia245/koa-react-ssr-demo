import { getReadme } from '../../api'
import { GET_README } from '../constants/markdown'

// 获取文章详情
export const actionGetReadme = () => {
  return async dispatch => {
    let data = await getReadme()
    dispatch({ type: GET_README, payload: data })
  }
}
