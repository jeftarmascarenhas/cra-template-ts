import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {
  persistStore,
  persistReducer,
  PersistConfig,
  Storage,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers'
import rootSaga from './sagas'

const persistConfig: PersistConfig<Storage> = {
  key: 'root',
  storage,
  blacklist: ['auth'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = createStore(persistedReducer, applyMiddleware(...middleware))
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor }
