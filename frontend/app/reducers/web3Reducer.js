import { WEB3_INITIALIZED, COINBASE_RETRIEVED } from 'utils/web3/actions';


const initialState = {
  instance: null,
  coinbase: null,
};

const web3Reducer = (state = initialState, action) => {
  if (WEB3_INITIALIZED === action.type) {
    return Object.assign({}, state, {
      instance: action.payload.instance
    });
  }

  else if (COINBASE_RETRIEVED === action.type) {
    return Object.assign({}, state, {
      coinbase: action.payload.coinbase
    });
  }

  return state;
};

export default web3Reducer;
