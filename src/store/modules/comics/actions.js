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

export function fetchComic(id) {
  return {
    type: '@comics/FETCH_COMIC',
    id,
  };
}

export function fetchComicSuccess(payload) {
  return {
    type: '@comics/FETCH_COMIC_SUCCESS',
    payload,
  };
}
