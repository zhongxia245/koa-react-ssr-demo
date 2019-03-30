import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Home = () => (
  <div>
    <div>
      <h1>首页</h1>
      <Link to="/list">跳转列表页</Link>
      <Link to="/detail/5bd4772a14e994202cd5bdb7">文章详情</Link>
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
