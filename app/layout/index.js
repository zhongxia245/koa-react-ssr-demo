import './index.less'
import React from 'react'
import { Link } from 'react-router-dom'

export const Layout = ({ children }) => {
  return (
    <main>
      <header>
        <Link to="/">首页</Link>
        <Link to="/article">文章列表</Link>
        <Link to="/example">项目展示</Link>
      </header>
      <content>{children}</content>
      <footer>Copyright 2019 @zhongxia</footer>
    </main>
  )
}
