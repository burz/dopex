/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';

// *** ONLY generalized reducers used across the application should be imported here. ***
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import routeReducer from 'reducers/routeReducer';


/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    language: languageProviderReducer,
    ...injectedReducers,
  });
}
