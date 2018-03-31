import { takeLatest, all, call, put, select, take, spawn, cancel } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import request from 'utils/request';

// import * as appConstants from 'pages/App/constants';
// import * as selectors from './selectors';
import * as actions from './actions';
import * as data from './data';
// import * as constants from './constants';
// import * as helpers from './helpers';


// -- Fetch Strike Table Data -- //
function* fetchStrikeTableData(action) {
  // console.log('fetching latest strike table data');
  yield put(actions.receiveStrikeTableData(data.sampleData));
}
export function* watchFetchInitialStrikeTableData() {
  yield takeLatest(actions.FETCH_INITIAL_STRIKE_TABLE_DATA, fetchStrikeTableData);
}
// -- End Fetch Strike Table Data -- //
