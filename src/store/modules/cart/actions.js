/**
 * This function creates an action for adding
 * a comic to the shopping cart
 * @params {Object} comic is a comic object
 * @returns {Object} a redux action
 */
export function addComic(comic) {
  return {
    type: '@cart/ADD_COMIC',
    payload: comic,
  };
}

/**
 * This function creates an action for updating
 * a comic amount in the shopping cart
 * @params {number} id is a comic id
 * @params {number} amount is the comics new amount
 * @returns {Object} a redux action
 */
export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    payload: { id, amount },
  };
}
