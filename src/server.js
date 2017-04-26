import httpProxy from 'http-proxy'
import React from 'react'
import express from 'express'
import path from 'path'
const app = express()

import serverRendering from './shared/serverRendering'
import { PORT } from './config'

const proxy = httpProxy.createProxyServer({
  target: 'http://127.0.0.1:5678'
})

app.use('/img', (req, res) => {
  proxy.web(req, res, {target: 'http://127.0.0.1:5678/'});
});

app.use(serverRendering);

app.listen(PORT);
console.log('Applicaion is running on port', PORT);
