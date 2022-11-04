/*
 *
 * MainPage reducer
 *
 */
import produce from 'immer';
import {
  RUN_SCRIPT_START,
  RUN_SCRIPT_SUCCESS,
  RUN_SCRIPT_FAILURE,
} from './constants';

export const initialState = {
  isScriptRunning: false,
  output: undefined,
  errorRunningScript: undefined,
};

/* eslint-disable default-case, no-param-reassign */
const mainPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RUN_SCRIPT_START:
        draft.isScriptRunning = true;
        break;
      case RUN_SCRIPT_SUCCESS:
        draft.isScriptRunning = false;
        draft.output = action.payload;
        break;
      case RUN_SCRIPT_FAILURE:
        draft.isScriptRunning = false;
        draft.errorRunningScript = action.payload;
        break;
    }
  });

export default mainPageReducer;
