import { combineReducers } from 'redux';

import comics from './comics/reducer';
import cart from './cart/reducer';

export default combineReducers({
  comics,
  cart,
});
