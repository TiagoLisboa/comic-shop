import { all } from 'redux-saga/effects';

import comics from './comics/sagas';

export default function*() {
  return yield all([comics]);
}
