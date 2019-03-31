import fs from 'fs'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import createStore from '../../app/redux/store/create'
import Router from '../../app/router'

// 替换 html 中的 {{}}
function templating(path) {
  const template = fs.readFileSync(path, 'utf-8')
  return props => template.replace(/{{([\s\S]*?)}}/g, (_, key) => props[key.trim()])
}

export default path => (ctx, next) => {
  const __templating__ = templating(path)
  try {
    ctx.render = (data = {}) => {
      console.log(`>>>>: ${ctx.url}`)
      const store = createStore(data)
      const html = renderToString(
        <Provider store={store}>
          {/* 因为 SSR，不知道当前路径是什么，需要这里传过去 */}
          <StaticRouter location={ctx.url} context={data}>
            <Router />
          </StaticRouter>
        </Provider>
      )
      const body = __templating__({
        html,
        store: JSON.stringify(data, null, 4)
      })
      ctx.type = 'text/html'
      ctx.body = body
    }
  } catch (err) {
    ctx.type = 'text/html'
    ctx.body = __templating__({ html: err.message })
  }

  // 这里必须是return next() 不然异步路由是404
  return next()
}
