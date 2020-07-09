import { all } from 'redux-saga/effects'

function* hellow(): IterableIterator<any> {
  yield console.log('Sagas')
}

export default function* rootSaga(): IterableIterator<any> {
  yield all([hellow()])
}
