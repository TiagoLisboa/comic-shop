import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { fetchComicsSuccess, fetchComicSuccess } from './actions';

/**
 * This generator watches for the @comics/FETCH_COMICS action
 * to make the api request whent it is triggered
 * @params {Object} action is a redux action
 * @yields {ReduxSaga.Effect} a redux saga effect
 */
function* fetchComics(action) {
  const response = yield call(api.get, `/comics`, {
    params: { offset: action.offset },
  });

  yield put(fetchComicsSuccess(response.data.data));
}

/**
 * This generator watches for the @comics/FETCH_COMIC action
 * to make the api request whent it is triggered
 * @params {Object} action is a redux action
 * @yields {ReduxSaga.Effect} a redux saga effect
 */
function* fetchComic(action) {
  const response = yield call(api.get, `/comics/${action.id}`);

  yield put(fetchComicSuccess(response.data.data));
}

export default all([
  takeLatest('@comics/FETCH_COMICS', fetchComics),
  takeLatest('@comics/FETCH_COMIC', fetchComic),
]);
