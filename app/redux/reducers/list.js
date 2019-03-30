import { GET_TOPIC } from '../constants/cnode'

const defaultState = {
  ssr: false,
  data: []
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_TOPIC:
      return Object.assign({}, state, { data: action.payload })
    default:
      return state
  }
}
