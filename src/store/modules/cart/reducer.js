const initial_state = [];

/**
 * This function creates a reducer for the cart state
 * @params {Object} [state = []] state is the actual application state
 * @params {Object} action the thrown redux action
 * @returns {Object} the new application state
 */
export default function cart(state = initial_state, action) {
  switch (action.type) {
    case '@cart/ADD_COMIC':
      const productIndex = state.findIndex(
        comic => comic.id === action.payload.id
      );

      if (productIndex >= 0) {
        const newState = [...state];
        newState[productIndex].amount += 1;
        return newState;
      }

      return [...state, { ...action.payload, amount: 1 }];
    case '@cart/UPDATE_AMOUNT':
      if (action.payload.amount <= 0) return state;
      const comicIndex = state.findIndex(
        comic => comic.id === action.payload.id
      );

      const newState = [...state];

      newState[comicIndex].amount = action.payload.amount;
      return newState;
    case '@cart/REMOVE_COMIC':
      return state.filter(comic => comic.id !== action.id);

    default:
      return state;
  }
}
