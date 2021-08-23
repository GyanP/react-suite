import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { Actions } from '../actions';
import { suiteInitialStates } from '../states';

export const suiteReducer = handleActions(
  {
    [Actions.REQUEST_NAV_ITEM]: (state = suiteInitialStates, action) => ({
      ...state,
      navItem: [],
    }),
    [Actions.NAV_ITEM_SUCCESS]: (state = suiteInitialStates, action) => ({
      ...state,
      navItem: action.payload,
    }),
  },
  suiteInitialStates
);

export const RootReducer = combineReducers({
  suiteReducer: suiteReducer,
});
