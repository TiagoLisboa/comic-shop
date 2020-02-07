import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { fetchComicsSuccess } from './actions';

function* fetchComics(action) {
  const response = yield call(api.get, `/comics`, {
    params: { offset: action.offset },
  });

  yield put(fetchComicsSuccess(response.data.data));
}

export default all([takeLatest('@comics/FETCH_COMICS', fetchComics)]);
