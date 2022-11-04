import { put, takeLatest, all } from 'redux-saga/effects';

import api from 'api';

import { runScriptSuccess, runScriptFailure } from './actions';
import { RUN_SCRIPT_START } from './constants';

export function* getTopics(action) {
  try {
    const response = yield api.get(`/get-topics/all`, {
      headers: { Authorization: localStorage._UFT_ },
    });

    yield put(runScriptSuccess(response.data.data));
  } catch (err) {
    yield put(runScriptFailure(err.data.message));
  }
}

// Individual exports for testing
export default function* mainPageSaga() {
  // See example in containers/HomePage/saga.js
  yield all([takeLatest(RUN_SCRIPT_START, getTopics)]);
}
