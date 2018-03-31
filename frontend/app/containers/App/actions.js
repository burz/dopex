export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_CATEGORIES_ERROR = 'RECEIVE_CATEGORIES_ERROR';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories
});

export const receiveCategoriesError = (err) => ({
  type: RECEIVE_CATEGORIES_ERROR,
  err
});

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES
});
