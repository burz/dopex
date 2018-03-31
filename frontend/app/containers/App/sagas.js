// import { call, put, takeEvery } from 'redux-saga/effects';
// import { FETCH_CATEGORIES, receiveCategories, receiveCategoriesError } from './actions.js';
// import request from '../../utils/request';
// import { ROOT_URL } from '../../constants';
//
//
// export function* watchfetchCategories() {
//   yield takeEvery('FETCH_CATEGORIES', fetchCategories);
// }
//
// function* fetchCategories() {
//   const requestURL = `${ROOT_URL}/v1/categories`;
//   try {
//     const categories = yield call(request, requestURL, {});
//
//     yield put(receiveCategories(categories));
//   } catch (err) {
//     yield put(receiveCategoriesError(err));
//   }
// }
