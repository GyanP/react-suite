import { createAction } from 'redux-actions';

export const Actions = {
  REQUEST_NAV_ITEM: 'Request to fetch nav items!', // request nav item
  NAV_ITEM_SUCCESS: 'Nav item fetch success',
  REQUEST_DISPLAY_DATA_ITEM: 'Request to fetch display data items!', // request display data item
  DISPLAY_DATA_ITEM_SUCCESS: 'Display data item fetch success',
  REQUEST_DATA_FROM_API: 'Request to fetch data from API', // request data from api
  DATA_FROM_API_SUCCESS: 'Data from API fetch success',
};

// Nav item
const requestNavItem = createAction(Actions.REQUEST_NAV_ITEM);
const navItemSuccess = createAction(Actions.NAV_ITEM_SUCCESS);

// display data item list
const requestDisplayDataItem = createAction(Actions.REQUEST_DISPLAY_DATA_ITEM);
const displayDataItemSuccess = createAction(Actions.DISPLAY_DATA_ITEM_SUCCESS);

// fetch data from API's
const requestDataFromApi = createAction(Actions.REQUEST_DATA_FROM_API);
const dataFromApiSuccess = createAction(Actions.DATA_FROM_API_SUCCESS);

export {
  requestNavItem,
  navItemSuccess,
  requestDisplayDataItem,
  displayDataItemSuccess,
  requestDataFromApi,
  dataFromApiSuccess,
};
