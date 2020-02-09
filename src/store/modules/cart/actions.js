export function addComic(comic) {
  return {
    type: '@cart/ADD_COMIC',
    payload: comic,
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    payload: { id, amount },
  };
}
