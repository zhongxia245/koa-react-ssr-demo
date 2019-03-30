import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionGetTopicDetail } from '../redux/action/detail'

const Detail = ({ ssr, data, getDetail, match }) => {
  useEffect(() => {
    if (!ssr) {
      getDetail(match.params.id)
    }
  }, [])

  return (
    <div>
      <div>
        <h1>详情页</h1>
        <Link to="/list">跳转列表页</Link>
      </div>
      {data ? (
        <div>
          <h2>{data.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  )
}

export default connect(
  ({ detail }) => ({ ...detail }),
  dispath => {
    return {
      getDetail: id => dispath(actionGetTopicDetail(id))
    }
  }
)(Detail)
