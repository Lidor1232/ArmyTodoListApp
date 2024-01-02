import {Platform} from 'react-native';

export function onGetAndroidLoaderSize({
  size,
}: {
  size: 'small' | 'large';
}): number {
  switch (size) {
    case 'small':
      return 25;
    case 'large':
      return 50;
    default:
      return 50;
  }
}

export function onGetLoaderSize({
  size,
}: {
  size: 'small' | 'large';
}): number | 'small' | 'large' {
  return Platform.OS === 'ios' ? size : onGetAndroidLoaderSize({size});
}
