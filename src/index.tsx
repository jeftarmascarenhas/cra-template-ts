import React from 'react'
import ReactDOM from 'react-dom'

import * as serviceWorker from './serviceWorker'

import Root from './root'
import ErrorBoundary from './errorBoundary'

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Root />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
