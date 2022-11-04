/*
 *
 * MainPage actions
 *
 */

import {
  DEFAULT_ACTION,
  RUN_SCRIPT_FAILURE,
  RUN_SCRIPT_START,
  RUN_SCRIPT_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function runScriptStart(payload) {
  return {
    type: RUN_SCRIPT_START,
    payload,
  };
}

export function runScriptSuccess(payload) {
  return {
    type: RUN_SCRIPT_SUCCESS,
    payload,
  };
}

export function runScriptFailure(err) {
  return {
    type: RUN_SCRIPT_FAILURE,
    payload: err,
  };
}
