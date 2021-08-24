import axios from 'axios';
import { createLogic } from 'redux-logic';
import { Alert } from 'rsuite';

import { navData, dataDisplayItem } from '../../util';
import {
  Actions,
  dataFromApiSuccess,
  displayDataItemSuccess,
  navItemSuccess,
} from '../actions';

// Nav item logic
const navItemRequestLogic = createLogic({
  type: Actions.REQUEST_NAV_ITEM,
  process(data, dispatch, done) {
    dispatch(navItemSuccess(navData));
    done();
  },
});

// Display data item logic
const displayDataItemRequestLogic = createLogic({
  type: Actions.REQUEST_DISPLAY_DATA_ITEM,
  process(data, dispatch, done) {
    dispatch(displayDataItemSuccess(dataDisplayItem));
    done();
  },
});

// Fetch  data from API logic
const dataFromApiRequestLogic = createLogic({
  type: Actions.REQUEST_DATA_FROM_API,
  async process(data, dispatch, done) {
    const {
      action: { payload },
    } = data;
    const { url } = dataDisplayItem.find((item) => item.key === payload); // getting item by key
    const { status, data: result } = await axios.get(url); // dynamic api calling
    if (status === 200) {
      switch (payload) {
        case 'Data USA':
          dispatch(dataFromApiSuccess(result.data)); // update data into reducer
          break;
        case 'openFDA':
          dispatch(dataFromApiSuccess(result.results)); // update data into reducer
          break;
        default:
          dispatch(dataFromApiSuccess(result)); // update data into reducer
          break;
      }
    } else {
      Alert.error('Data not found'); // execute if data not fetch from api
    }
    done();
  },
});

export const Logics = [
  navItemRequestLogic,
  displayDataItemRequestLogic,
  dataFromApiRequestLogic,
];
