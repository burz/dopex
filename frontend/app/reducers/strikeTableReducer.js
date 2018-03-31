import { fromJS, List, toJS } from 'immutable';

// import * as constants from 'components/VideoWallPage/VideoWall/constants';
import * as actions from 'components/ScreenerPage/StrikeTable/actions';


const initialState = fromJS({
  data: List(),
  error: null,
  loading: true,
});


function strikeTableReducer(state = initialState, action) {
  switch (action.type) {
    case actions.RECEIVE_STRIKE_TABLE_DATA:
      return state.merge({
        data: action.data,
        error: false,
        loading: false,
      });

    default:
      return state;
  }
}

export default strikeTableReducer;
