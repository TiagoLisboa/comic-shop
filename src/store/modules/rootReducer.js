import { combineReducers } from 'redux';

import comics from './comics/reducer';
import cart from './cart/reducer';

/**
 * This returns a single reducer combining all other reducers
 */
export default combineReducers({
  comics,
  cart,
});
