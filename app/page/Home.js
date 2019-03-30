import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Home = () => (
  <div>
    <p>这个是首页</p>
    <hr />
    <div>
      <Link to="/article">跳转列表页</Link>
      <br />
      <br />
      <Link to="/article/5bd4772a14e994202cd5bdb7">文章详情</Link>
    </div>
  </div>
)

/**
 * 通过connect将redux中的数据传递进入组件
 */
function mapStateTpProps(state) {
  return { ...state.home }
}

export default connect(mapStateTpProps)(Home)
