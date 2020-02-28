import { combineReducers, Reducer } from 'redux';

import {
  reducer as gitReducer,
  State as gitState,
  Action as gitAction,
  initialState as gitInitialState,
} from '@common/store/git/reducer';

export interface State {
  git: gitState;
}

export type Action = gitAction;

export const initialState = {
  git: gitInitialState,
};

const reducer: Reducer<State> = combineReducers<State>({
  git: gitReducer,
});

export default reducer;
