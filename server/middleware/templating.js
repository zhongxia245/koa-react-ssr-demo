import fs from 'fs'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import createStore from '../../app/redux/store/create'
import Router from '../../app/router'

// 匹配模板中的{{}}
function templating(props) {
  const template = fs.readFileSync(path.join(__dirname, '../../template/server.html'), 'utf-8')
  return template.replace(/{{([\s\S]*?)}}/g, (_, key) => props[key.trim()])
}

export default function(ctx, next) {
  try {
    ctx.render = (data = {}) => {
      console.log(`>>>>: ${ctx.url}`)
      const store = createStore(data)
      const html = renderToString(
        <Provider store={store}>
          <StaticRouter location={ctx.url} context={data}>
            <Router />
          </StaticRouter>
        </Provider>
      )
      const body = templating({
        html,
        store: JSON.stringify(data, null, 4)
      })
      ctx.type = 'text/html'
      ctx.body = body
    }
  } catch (err) {
    ctx.type = 'text/html'
    ctx.body = templating({ html: err.message })
  }

  // 这里必须是return next() 不然异步路由是404
  return next()
}
