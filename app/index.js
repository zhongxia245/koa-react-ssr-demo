import './index.less'
import 'github-markdown-css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import createStore from './redux/store/create'

const defaultStore = window.__STORE__ || {}
const store = createStore(defaultStore)

render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
