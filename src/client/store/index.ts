import { combineReducers, Reducer } from 'redux';

import { reducer as uiReducer, State as uiState, Action as uiAction } from './ui/reducer';

export interface State {
  ui: uiState;
}

export type Action = uiAction;

const reducer: Reducer<State> = combineReducers<State>({
  ui: uiReducer,
});

export default reducer;
