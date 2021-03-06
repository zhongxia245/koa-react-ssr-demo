import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionGetTopic } from '../redux/action/cnode'

const List = ({ ssr, data = [], getTopic }) => {
  useEffect(() => {
    if (!ssr && data.length === 0) {
      getTopic()
    }
  }, [])

  return (
    <div>
      <Link to="/">Home</Link>
      <ul>
        {data.map((item, i) => (
          <li key={i}>
            <Link to={`/article/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default connect(
  ({ list }) => ({ ...list }),
  dispatch => {
    return {
      getTopic: () => dispatch(actionGetTopic())
    }
  }
)(List)
