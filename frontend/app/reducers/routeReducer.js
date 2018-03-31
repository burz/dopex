import { LOCATION_CHANGE } from 'react-router-redux';
import { merge } from 'lodash';
/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = {
  locationBeforeTransitions: null,
};

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */

    case LOCATION_CHANGE:
      return merge({}, state, { locationBeforeTransitions: action.payload });

    default:
      return state;
  }
}

export default routeReducer;
