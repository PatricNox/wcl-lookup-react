import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'

render(
  <Provider store={createStore(() => null)}>
    <App />
  </Provider>,
  document.getElementById('root')
)
