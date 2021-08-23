import { createLogic } from 'redux-logic';
import { NavData } from '../../util';
import { Actions, navItemSuccess } from '../actions';

const navItemRequestLogic = createLogic({
  type: Actions.REQUEST_NAV_ITEM,
  async process(data, dispatch, done) {
    dispatch(navItemSuccess(NavData));
  },
});

export const Logics = [navItemRequestLogic];
