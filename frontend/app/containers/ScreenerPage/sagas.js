// ***** IMPORTANT ***** //
// Place all sagas that are relevant ONLY TO the **ScreenerPage**
import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';

import * as strikeTableSagas from 'components/ScreenerPage/StrikeTable/sagas';
import * as visualizerSagas from 'components/ScreenerPage/Visualizer/sagas';


function* rootSaga() {
  yield all([
    strikeTableSagas.watchFetchInitialStrikeTableData(),
    visualizerSagas.watchFetchInitialVisualizerData(),
  ]);
}

export default rootSaga;
