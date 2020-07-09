import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import './index.css'
import { store, persistor } from 'src/redux'
import App from './App'

const Root: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} />
      <App />
    </Provider>
  )
}

export default Root
