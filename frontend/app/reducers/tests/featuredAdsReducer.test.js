import featuredAdsReducer from '../featuredAdsReducer';
import {
  loadFeaturedAds,
  featuredAdsLoaded,
  featuredAdsLoadingError,
} from '../../components/AdCarousel/actions';

describe('featuredAdsReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      ads: false,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(featuredAdsReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadFeaturedAds action correctly', () => {
    const expectedResult = {
      loading: true,
      error: false,
      ads: false,
    };

    expect(featuredAdsReducer(state, loadFeaturedAds())).toEqual(expectedResult);
  });

  it('should handle the featuredAdsLoaded action correctly', () => {
    const fixture = [{
      name: 'My Ad',
    }];

    const expectedResult = {
      loading: false,
      error: false,
      ads: fixture,
    };

    expect(featuredAdsReducer(state, featuredAdsLoaded(fixture))).toEqual(expectedResult);
  });

  it('should handle the featuredAdsLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = {
      loading: false,
      error: fixture,
      ads: false,
    };

    expect(featuredAdsReducer(state, featuredAdsLoadingError(fixture))).toEqual(expectedResult);
  });
});
