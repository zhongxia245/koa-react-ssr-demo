import { GET_TOPIC } from '../constants/detail'

const defaultState = {
  ssr: false,
  data: ['react真好玩', 'koa有点意思', 'ssr更有意思', 'good morning']
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_TOPIC:
      return Object.assign({}, state, { data: action.payload })
    default:
      return state
  }
}
