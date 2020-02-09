const initial_state = [];

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
    default:
      return state;
  }
}
