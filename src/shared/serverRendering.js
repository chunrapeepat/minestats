import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { renderToString } from 'react-dom/server'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { RouterContext, match, createMemoryHistory } from 'react-router'

import {PORT, BundleURL} from '../config'
import {server} from './reduxStore'
import routes from './routes'

import WithStylesContext from './WithStylesContext'

const renderPage = (components, initialState, css) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Home - Minecraft Hero Thailand</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">
      <style>${css.join('')}</style>
    </head>
    <body>
      <div id="fb-root"></div>
      <script>(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=336706240032953";
        fjs.parentNode.insertBefore(js, fjs); 
      }(document, 'script', 'facebook-jssdk'));</script>
      <div id="app">${components}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
      </script>
      <script src="${BundleURL}"></script>
    </body>
  </html>
  `
}

export default function(req, res){
  global.navigator = global.navigator || {};
  global.navigator.userAgent = req.headers['user-agent'] || 'all';

  const css = []
  match({
    location: req.url,
    routes
  }, (error, redirectLocation, renderProps) => {
      if(renderProps){
        res.status(200).send(renderPage(renderToString(
          <WithStylesContext onInsertCss={styles => css.push(styles._getCss())}>
            <MuiThemeProvider>
              <Provider store={server}>
                <RouterContext {...renderProps}/>
              </Provider>
            </MuiThemeProvider>
          </WithStylesContext>
        ), server.getState(), css))
      } else{
        res.status(404).send('Not Found')
      }
  })
}
