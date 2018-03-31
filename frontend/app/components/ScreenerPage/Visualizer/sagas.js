import { takeLatest, all, call, put, select, take, spawn, cancel } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import request from 'utils/request';

// import * as appConstants from 'pages/App/constants';
// import * as selectors from './selectors';
import * as actions from './actions';
import * as data from './data';
// import * as constants from './constants';
// import * as helpers from './helpers';


// -- Fetch Visualizer Data -- //
function* fetchVisualizerData(action) {
  console.log('fetching latest strike table data');
  yield put(actions.receiveVisualizerData(data.sampleData));
}
export function* watchFetchInitialVisualizerData() {
  yield takeLatest(actions.FETCH_INITIAL_VISUALIZER_DATA, fetchVisualizerData);
}
// -- End Fetch Visualizer Data -- //
