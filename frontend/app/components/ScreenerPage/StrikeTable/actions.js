export const FETCH_INITIAL_STRIKE_TABLE_DATA = 'app/components/ScreenerPage/StrikeTable/FETCH_INITIAL_STRIKE_TABLE_DATA';
export const RECEIVE_STRIKE_TABLE_DATA = 'app/components/ScreenerPage/StrikeTable/RECEIVE_STRIKE_TABLE_DATA';

//
// export const RECEIVE_INITAL_VIDEO_WALL_DATA = 'app/components/ScreenerPage/StrikeTable/RECEIVE_INITAL_VIDEO_WALL_DATA';
// export const RECEIVE_VIDEO_WALL_DATA = 'app/components/ScreenerPage/StrikeTable/RECEIVE_VIDEO_WALL_DATA';
// export const RECEIVE_VIDEO_WALL_DATA_ERROR = 'app/components/ScreenerPage/StrikeTable/RECEIVE_VIDEO_WALL_DATA_ERROR';
// export const CANCEL_FETCH_VIDEO_WALL_DATA = 'app/components/ScreenerPage/StrikeTable/CANCEL_FETCH_VIDEO_WALL_DATA';

// -- Strike Table Data -- //
export const fetchInitialStrikeTableData = () => ({
  type: FETCH_INITIAL_STRIKE_TABLE_DATA,
});

export const receiveStrikeTableData = data => ({
  type: RECEIVE_STRIKE_TABLE_DATA,
  data,
});
// -- End Strike Table Data -- //


//
// // -- Initialize Application -- //
// export const initializeApplication = () => ({
//   type: INITIALIZE_APPLICATION,
// });
//
// export const closeApplication = () => ({
//   type: CLOSE_APPLICATION,
// });
//
// export const clearData = () => ({
//   type: CLEAR_DATA,
// });
// // -- End Initialize Application -- //
