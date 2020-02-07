const initial_state = {
  comics: [],
  pagination: {
    offset: 0,
    limit: 0,
    total: 0,
    count: 0,
  },
};

export default function comics(state = initial_state, action) {
  switch (action.type) {
    case '@comics/FETCH_COMICS_SUCCESS':
      return {
        comics: action.payload.results,
        pagination: (({ offset, limit, total, count }) => ({
          offset,
          limit,
          total,
          count,
        }))(action.payload),
      };
    default:
      return state;
  }
}
