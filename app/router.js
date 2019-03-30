import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout } from './layout'
import Home from './page/Home'
import List from './page/List'
import Detail from './page/Detail'
import Example from './page/Example'
// import NotFound from './page/404'

export default () => (
  <Switch>
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/article" component={List} />
      <Route exact path="/article/:id" component={Detail} />
      <Route exact path="/example" component={Example} />
      {/* <Route component={NotFound} /> */}
    </Layout>
  </Switch>
)
