import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actionGetReadme } from '../redux/action/markdown'

const Home = ({ ssr, data, getReadme }) => {
  useEffect(() => {
    if (!ssr) {
      getReadme()
    }
  }, [])

  let html = typeof data === 'string' ? data : '这里是首页'
  return <div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
}

export default connect(
  ({ home }) => ({ ...home }),
  dispatch => {
    return {
      getReadme: () => dispatch(actionGetReadme())
    }
  }
)(Home)
