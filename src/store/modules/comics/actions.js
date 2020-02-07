export function fetchComics(offset) {
  return {
    type: '@comics/FETCH_COMICS',
    offset,
  };
}

export function fetchComicsSuccess(payload) {
  return {
    type: '@comics/FETCH_COMICS_SUCCESS',
    payload,
  };
}
