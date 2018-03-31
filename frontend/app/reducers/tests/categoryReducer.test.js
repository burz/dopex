import categoryReducer from '../categoryReducer';

import {
  RECEIVE_CATEGORIES,
  RECEIVE_CATEGORIES_ERROR,
} from '../../containers/App/actions.js';

describe('CategoryReducer', () => {
  let state;
  beforeEach(() => {
    state = {};
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(categoryReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle RECEIVE_CATEGORIES correctly', () => {
    const action = {
      type: RECEIVE_CATEGORIES,
      categories: [{
          id: 1,
          name: 'Apparel, Accessories & Footwear'
        }, {
          id: 19,
          name: 'Auto & Parts'
        }, {
          id: 3,
          name: 'Business & Industrial'
        }, {
          id: 4,
          name: 'Education & Training'
        }, {
          id: 5,
          name: 'Electronics & Communication'
        }]
    };

    /*eslint-disable */
    const expectedState =
      { '0': { 'id': 1, 'name': 'Apparel, Accessories & Footwear' },
        '1': { 'id': 19, 'name': 'Auto & Parts' },
        '2': { 'id': 3, 'name': 'Business & Industrial' },
        '3': { 'id': 4, 'name': 'Education & Training' },
        '4': { 'id': 5, 'name': 'Electronics & Communication' } }
    /*eslint-enable */

    expect(categoryReducer(state, action)).toEqual(expectedState);
  });

  it('should handle RECEIVE_CATEGORY_AIRINGS_ERROR correctly', () => {
    const action = {
      type: RECEIVE_CATEGORIES_ERROR,
      err: { error: 'information' }
    };

    const expectedState = {
      error: 'information'
    };

    expect(categoryReducer(state, action)).toEqual(expectedState);
  });
});
