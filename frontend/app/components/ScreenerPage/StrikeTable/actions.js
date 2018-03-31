export const FETCH_INITIAL_STRIKE_TABLE_DATA = 'app/components/ScreenerPage/StrikeTable/FETCH_INITIAL_STRIKE_TABLE_DATA';
export const RECEIVE_STRIKE_TABLE_DATA = 'app/components/ScreenerPage/StrikeTable/RECEIVE_STRIKE_TABLE_DATA';


// -- Strike Table Data -- //
export const fetchInitialStrikeTableData = () => ({
  type: FETCH_INITIAL_STRIKE_TABLE_DATA,
});

export const receiveStrikeTableData = data => ({
  type: RECEIVE_STRIKE_TABLE_DATA,
  data: data,
});
// -- End Strike Table Data -- //