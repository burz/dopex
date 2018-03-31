export const FETCH_INITIAL_VISUALIZER_DATA = 'app/components/ScreenerPage/Visuzlier/FETCH_INITIAL_VISUALIZER_DATA';
export const RECEIVE_VISUALIZER_DATA = 'app/components/ScreenerPage/Visuzlier/RECEIVE_VISUALIZER_DATA';


// -- Visualizer Data -- //
export const fetchInitialVisualizerData = () => ({
  type: FETCH_INITIAL_VISUALIZER_DATA,
});

export const receiveVisualizerData = data => ({
  type: RECEIVE_VISUALIZER_DATA,
  data,
});
// -- End Visualizer Data -- //
