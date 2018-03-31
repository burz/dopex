import { fromJS, List, toJS } from 'immutable';

import * as actions from 'components/ScreenerPage/Visualizer/actions';


const initialState = fromJS({
  data: List(),
  error: null,
  loading: true,
});


function visualizerReducer(state = initialState, action) {
  switch (action.type) {
    case actions.RECEIVE_VISUALIZER_DATA:
      return state.merge({
        data: action.data,
        error: false,
        loading: false,
      });

    default:
      return state;
  }
}

export default visualizerReducer;
