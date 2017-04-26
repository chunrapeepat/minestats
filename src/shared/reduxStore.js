import React from 'react'
import { createStore } from 'redux'
import { reducers } from './reduxReducers.js'

const initialState = {}

if(typeof window === 'undefined'){
  global.window = {}
}

if(typeof document === 'undefined'){
  global.document = {}
}

export const client = createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const server = createStore(
  reducers,
  initialState
)
