import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Menubar from '../routes/Menubar'
import IndexPage from '../routes/IndexPage'
import Ranking from '../routes/Ranking'
import Donate from '../routes/Donate'
import Contact from '../routes/Contact'

export default (
  <Route path="/" component={Menubar}>
    <IndexRoute component={IndexPage}/>
    <Route path="/ranking" component={Ranking}/>
    <Route path="/donate" component={Donate}/>
    <Route path="/contact" component={Contact}/>
  </Route>
)
