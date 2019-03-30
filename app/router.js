import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Home from './page/Home'
import List from './page/List'
import Detail from './page/Detail'


export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/list" component={List} />
    <Route exact path="/detail/:id" component={Detail} />
  </Switch>
)
