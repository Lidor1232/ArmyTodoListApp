import {
  DEVICE_SET_APP_CONTENT_HEIGHT,
  DEVICE_SET_BOTTOM_NAVIGATION_HEIGHT,
  DEVICE_SET_STATUS_BAR_HEIGHT,
} from '../actions/device.actions';
import {IAction} from '../../utills/types';

export interface IState {
  statusBarHeight: number | null;
  bottomNavigationHeight: number | null;
  deviceAppContentHeight: number | null;
}

const initialState: IState = {
  statusBarHeight: null,
  bottomNavigationHeight: null,
  deviceAppContentHeight: null,
};

export const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case DEVICE_SET_STATUS_BAR_HEIGHT:
      return {
        ...state,
        statusBarHeight: action.payload,
      };

    case DEVICE_SET_BOTTOM_NAVIGATION_HEIGHT:
      return {
        ...state,
        bottomNavigationHeight: action.payload,
      };

    case DEVICE_SET_APP_CONTENT_HEIGHT:
      return {
        ...state,
        deviceAppContentHeight: action.payload,
      };

    default:
      return state;
  }
};
