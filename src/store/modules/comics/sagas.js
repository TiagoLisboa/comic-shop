import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { fetchComicsSuccess, fetchComicSuccess } from './actions';

function* fetchComics(action) {
  const response = yield call(api.get, `/comics`, {
    params: { offset: action.offset },
  });

  yield put(fetchComicsSuccess(response.data.data));
}

function* fetchComic(action) {
  const response = yield call(api.get, `/comics/${action.id}`);

  yield put(fetchComicSuccess(response.data.data));
}

export default all([
  takeLatest('@comics/FETCH_COMICS', fetchComics),
  takeLatest('@comics/FETCH_COMIC', fetchComic),
]);
