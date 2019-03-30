import { GET_TOPIC_DETAIL } from '../constants/detail'

const defaultState = {
  ssr: false,
  data: {}
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_TOPIC_DETAIL:
      return Object.assign({}, state, { data: action.payload })
    default:
      return state
  }
}
