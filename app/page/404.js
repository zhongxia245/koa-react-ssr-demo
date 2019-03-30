import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>404</h2>
      <p>Page is not found !!</p>
      <br />
      <br />
      <Link to="/">返回首页</Link>
    </div>
  )
}
