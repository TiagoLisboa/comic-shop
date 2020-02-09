export function addComic(comic) {
  return {
    type: '@cart/ADD_COMIC',
    payload: comic,
  };
}
