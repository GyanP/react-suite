import { createAction } from 'redux-actions';

export const Actions = {
  REQUEST_NAV_ITEM: 'Request to fetch nav items!',
  NAV_ITEM_SUCCESS: 'Nav item fetch success',
};

/*
---------------
  Nav Item 
---------------
*/
const requestNavItem = createAction(Actions.REQUEST_NAV_ITEM);
const navItemSuccess = createAction(Actions.NAV_ITEM_SUCCESS);

export { requestNavItem, navItemSuccess };
