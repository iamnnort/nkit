import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as actionsCreators from './actionsCreators';
import { ActionTypes, Git } from './types';

export type State = Git;
export type Action = ActionType<typeof actionsCreators>;

const initialState: State = {
  isLoaded: false,
  isLoading: false,
  releases: [],
};

export const reducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_RELEASES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.LOAD_RELEASES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        releases: action.payload,
      };

    case ActionTypes.LOAD_RELEASES_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
