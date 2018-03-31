export const WEB3_INITIALIZED = 'WEB3_INITIALIZED';
export const COINBASE_RETRIEVED = 'COINBASE_RETRIEVED';


export const web3Initialized = results => ({
  type: WEB3_INITIALIZED,
  payload: results,
});

export const coinbaseRetrieved = results => ({
  type: COINBASE_RETRIEVED,
  payload: results,
});
