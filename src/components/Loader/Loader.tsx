import {StyleSheet, View, ViewStyle, ActivityIndicator} from 'react-native';
import React, {FC, useMemo} from 'react';
import {COLORS} from '../../assets/colors/colors';
import {onGetLoaderSize} from './Loader.controller';

export type ILoaderColor =
  | typeof COLORS.white
  | typeof COLORS.primary
  | typeof COLORS.secondary;

interface IProps {
  color?: ILoaderColor;
  size?: 'small' | 'large';
  style?: ViewStyle;
  lottieStyle?: ViewStyle;
}

export const Loader: FC<IProps> = React.memo(
  ({color = COLORS.white, style, size = 'large'}) => {
    const loaderSize = useMemo(() => onGetLoaderSize({size}), [size]);

    return (
      <View style={[styles.container, style]}>
        <ActivityIndicator size={loaderSize} color={color} />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    height: 150,
  },
});
