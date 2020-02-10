import { all } from 'redux-saga/effects';

import comics from './comics/sagas';

/**
 * This generator creates a unified saga
 * @returns {ReduxSaga.Effect} with all other sagas effects
 */
export default function*() {
  return yield all([comics]);
}
