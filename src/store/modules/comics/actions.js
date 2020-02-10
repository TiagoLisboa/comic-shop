/**
 * This function creates an action for fetching comics in api
 * @params {number} offset any page number
 * @returns {Object} a redux action
 */
export function fetchComics(offset) {
  return {
    type: '@comics/FETCH_COMICS',
    offset,
  };
}

/**
 * This function creates an action for receiving comics from api
 * @params {Object} payload a api response
 * @returns {Object} a redux action
 */
export function fetchComicsSuccess(payload) {
  return {
    type: '@comics/FETCH_COMICS_SUCCESS',
    payload,
  };
}

/**
 * This function creates an action for fetching a single comic in api
 * @params {number} id any comic id
 * @returns {Object} a redux action
 */
export function fetchComic(id) {
  return {
    type: '@comics/FETCH_COMIC',
    id,
  };
}

/**
 * This function creates an action for receiving a comic from api
 * @params {Object} payload any comic object
 * @returns {Object} a redux action
 */
export function fetchComicSuccess(payload) {
  return {
    type: '@comics/FETCH_COMIC_SUCCESS',
    payload,
  };
}
