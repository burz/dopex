import airingReducer from '../airingReducer';

import {
  RECEIVE_CATEGORY_AIRINGS,
  RECEIVE_CATEGORY_AIRINGS_ERROR,
  REMOVE_CATEGORY_AIRINGS,
} from '../../containers/CategoryDetailPage/actions.js';

describe('airingReducer', () => {
  let state;
  beforeEach(() => {
    state = {};
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(airingReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle RECEIVE_CATEGORY_AIRINGS correctly', () => {
    const action = {
      type: RECEIVE_CATEGORY_AIRINGS,
      airings: {
        categoryName: 'Life & Entertainment',
        contentId: 3236451,
        applicable: 'national',
        brandName: 'Hulu',
      }
    };

    const expectedState = {
      categoryName: 'Life & Entertainment',
      contentId: 3236451,
      applicable: 'national',
      brandName: 'Hulu',
    };

    expect(airingReducer(state, action)).toEqual(expectedState);
  });

  it('should handle RECEIVE_CATEGORY_AIRINGS_ERROR correctly', () => {
    const action = {
      type: RECEIVE_CATEGORY_AIRINGS_ERROR,
      err: { error: 'information' }
    };

    const expectedState = {
      error: 'information'
    };

    expect(airingReducer(state, action)).toEqual(expectedState);
  });

  it('should handle REMOVE_CATEGORY_AIRINGS correctly', () => {
    const action = {
      type: REMOVE_CATEGORY_AIRINGS
    };

    const airingState = {
      categoryName: 'Life & Entertainment',
      contentId: 3236451,
      applicable: 'national',
      brandName: 'Hulu',
    };

    const expectedState = {};

    expect(airingReducer(airingState, action)).toEqual(expectedState);
  });
});
