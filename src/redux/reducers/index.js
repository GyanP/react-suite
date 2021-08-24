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

    [Actions.REQUEST_DISPLAY_DATA_ITEM]: (
      state = suiteInitialStates,
      action
    ) => ({
      ...state,
      displayDataItem: [],
    }),
    [Actions.DISPLAY_DATA_ITEM_SUCCESS]: (
      state = suiteInitialStates,
      action
    ) => ({
      ...state,
      displayDataItem: action.payload,
    }),

    [Actions.REQUEST_DATA_FROM_API]: (state = suiteInitialStates, action) => ({
      ...state,
      apiData: [],
      isLoading: true,
    }),
    [Actions.DATA_FROM_API_SUCCESS]: (state = suiteInitialStates, action) => ({
      ...state,
      apiData: action.payload,
      isLoading: false,
    }),
  },
  suiteInitialStates
);

export const RootReducer = combineReducers({
  suiteReducer: suiteReducer,
});
