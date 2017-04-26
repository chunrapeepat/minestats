import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import WithStylesContext from './shared/WithStylesContext.js'
import {client} from './shared/reduxStore'
import routes from './shared/routes'

ReactDOM.render(
  <WithStylesContext onInsertCss={ styles => styles._insertCss() }>
    <MuiThemeProvider>
      <Provider store={client}>
        <Router history={browserHistory} routes={routes}/>
      </Provider>
    </MuiThemeProvider>
  </WithStylesContext>
  , document.getElementById('app')
)
