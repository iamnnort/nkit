import { action } from 'typesafe-actions';
import { ActionTypes } from './types';

export const toggleSidebar = () => action(ActionTypes.TOGGLE_SIDEBAR);
