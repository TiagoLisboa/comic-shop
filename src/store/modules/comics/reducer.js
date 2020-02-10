const initial_state = {
  comics: [],
  comic: {},
  isLoading: true,
  pagination: {
    offset: 0,
    limit: 0,
    total: 0,
    count: 0,
  },
};

/**
 * This functions creates a reducer from comics state
 * @params {Object} [state=initial_state] state the actual application state
 * @params {Object} action the thrown redux action
 * @returns {Object} returns the new state
 */
export default function comics(state = initial_state, action) {
  switch (action.type) {
    case '@comics/FETCH_COMICS':
    case '@comics/FETCH_COMIC':
      return {
        ...state,
        isLoading: true,
      };
    case '@comics/FETCH_COMICS_SUCCESS':
      return {
        ...state,
        comics: action.payload.results,
        isLoading: false,
        pagination: (({ offset, limit, total, count }) => ({
          offset,
          limit,
          total,
          count,
        }))(action.payload),
      };
    case '@comics/FETCH_COMIC_SUCCESS':
      return {
        ...state,
        comic: action.payload.results[0],
        isLoading: false,
      };
    default:
      return state;
  }
}
