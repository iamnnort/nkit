import { combineReducers, Reducer } from 'redux';

import { reducer as gitReducer, State as gitState } from './git/reducer';

export interface State {
  git: gitState;
}

const reducer: Reducer<State> = combineReducers<State>({
  git: gitReducer,
});

export default reducer;
