/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';

// *** ONLY generalized reducers used across the application should be imported here. ***
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import routeReducer from 'reducers/routeReducer';
import strikeTableReducer from 'reducers/strikeTableReducer';
import visualizerReducer from 'reducers/visualizerReducer';
import web3Reducer from 'reducers/web3Reducer';


/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    language: languageProviderReducer,
    strikeTable: strikeTableReducer,
    visualizer: visualizerReducer,
    web3: web3Reducer,
    ...injectedReducers,
  });
}
