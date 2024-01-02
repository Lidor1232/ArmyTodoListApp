import React, {FC, lazy, Suspense, useEffect, useLayoutEffect} from 'react';
import {Loader} from '../Loader/Loader';
import {COLORS} from '../../assets/colors/colors';
import {onLayoutMount, onMount} from './AppContainer.controller';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const AppNavigation = lazy(() =>
  import('../../navigation/App/App.navigation').then(module => ({
    default: module.AppNavigation,
  })),
);

interface IProps {}

export const AppContainer: FC<IProps> = React.memo(({}) => {
  const safeAreaInsets = useSafeAreaInsets();

  useLayoutEffect(() => {
    onLayoutMount({
      safeAreaInsets,
    });
  }, []);

  useEffect(() => {
    onMount();
  }, []);

  return (
    <Suspense fallback={<Loader color={COLORS.primary} />}>
      <AppNavigation />
    </Suspense>
  );
});
