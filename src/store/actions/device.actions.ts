export const DEVICE_SET_STATUS_BAR_HEIGHT = 'DEVICE_SET_STATUS_BAR_HEIGHT';
export const DEVICE_SET_BOTTOM_NAVIGATION_HEIGHT =
  'DEVICE_SET_BOTTOM_NAVIGATION_HEIGHT';
export const DEVICE_SET_APP_CONTENT_HEIGHT = 'DEVICE_SET_APP_CONTENT_HEIGHT';

export const deviceSetStatusBarHeight = ({
  statusBarHeight,
}: {
  statusBarHeight: number;
}) => {
  return {
    type: DEVICE_SET_STATUS_BAR_HEIGHT,
    payload: statusBarHeight,
  };
};

export const deviceSetBottomNavigationHeight = ({
  bottomNavigationHeight,
}: {
  bottomNavigationHeight: number;
}) => {
  return {
    type: DEVICE_SET_BOTTOM_NAVIGATION_HEIGHT,
    payload: bottomNavigationHeight,
  };
};

export function deviceSetAppContentHeight({
  deviceAppContentHeight,
}: {
  deviceAppContentHeight: number;
}) {
  return {
    type: DEVICE_SET_APP_CONTENT_HEIGHT,
    payload: deviceAppContentHeight,
  };
}
