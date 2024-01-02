import SplashScreen from 'react-native-splash-screen';
import {store} from '../../store/store';
import {EdgeInsets} from 'react-native-safe-area-context';
import {LayoutChangeEvent} from 'react-native';
import {
  deviceSetAppContentHeight,
  deviceSetBottomNavigationHeight,
  deviceSetStatusBarHeight,
} from '../../store/actions/device.actions';
import {getStatusBarHeight} from 'react-native-safearea-height';

export function onHandlePermissions(): void {}

export function onMount(): void {
  onHandlePermissions();
  onHideSplashScreen();
}

export function onHideSplashScreen(): void {
  SplashScreen.hide();
}

export function onStatusBarHeight({
  safeAreaHeight,
}: {
  safeAreaHeight: number;
}): void {
  const statusBarHeight =
    safeAreaHeight > 0 ? safeAreaHeight : getStatusBarHeight();
  store.dispatch(deviceSetStatusBarHeight({statusBarHeight}));
}

export function onDeviceAppContentHeight({
  layoutHeight,
}: {
  layoutHeight: number;
}): void {
  const currentDeviceAppContentHeight =
    store.getState().device.deviceAppContentHeight;
  if (!currentDeviceAppContentHeight) {
    store.dispatch(
      deviceSetAppContentHeight({deviceAppContentHeight: layoutHeight}),
    );
  }
}

export function onLayout(e: LayoutChangeEvent): void {
  onDeviceAppContentHeight({layoutHeight: e.nativeEvent.layout.height});
}

export function onLayoutMount({
  safeAreaInsets,
}: {
  safeAreaInsets: EdgeInsets;
}): void {
  onStatusBarHeight({
    safeAreaHeight: safeAreaInsets.top,
  });
  store.dispatch(
    deviceSetBottomNavigationHeight({
      bottomNavigationHeight: safeAreaInsets.bottom,
    }),
  );
}
