import { fromJS, List, toJS } from 'immutable';
import { WEB3_INITIALIZED, COINBASE_RETRIEVED } from 'utils/web3/actions';


const initialState = {
  instance: null,
  coinbase: null,
};

const web3Reducer = (state = initialState, action) => {
  switch (action.type) {
    case WEB3_INITIALIZED:
      return state.merge({
        instance: action.payload.instance,
      });

    case COINBASE_RETRIEVED:
      return state.merge({
        coinbase: action.payload.coinbase,
      });

    default:
      return state;
  }
};

export default web3Reducer;
