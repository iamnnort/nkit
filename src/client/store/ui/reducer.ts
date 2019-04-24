import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ActionTypes, UiInterface } from './types';

const initialState = {
  isSidebarOpened: false,
};

export type State = UiInterface;
export type Action = ActionType<typeof actions>;

export const reducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        isSidebarOpened: !state.isSidebarOpened,
      };

    default:
      return state;
  }
};
