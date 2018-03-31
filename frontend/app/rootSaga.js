import { put, takeEvery, all } from 'redux-saga/effects';
import { watchfetchCategories } from './containers/App/sagas.js';

export default function* rootSaga() {
  yield all([
    popupStatus()
  ]);
}
