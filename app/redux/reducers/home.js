import { GET_README } from '../constants/markdown'

const defaultState = {
  ssr: false,
  data: ''
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_README:
      return Object.assign({}, state, { data: action.payload })
    default:
      return state
  }
}
