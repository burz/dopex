// ***** IMPORTANT ***** //
// Place all sagas that are relevant ONLY TO the **ScreenerPage**
import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';

import * as strikeTableSagas from 'components/ScreenerPage/StrikeTable/sagas';


function* rootSaga() {
  yield all([
    strikeTableSagas.watchFetchInitialStrikeTableData(),
  ]);
}

export default rootSaga;
