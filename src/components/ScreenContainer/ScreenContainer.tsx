import {StyleSheet, View, ViewStyle} from 'react-native';
import React, {FC, ReactNode, useMemo} from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../store/reducers/combineReducer.reducer';
import {onNormalizeDeviceStatusBarHeight} from '../../store/services/device.service';
import {COLORS} from '../../assets/colors/colors';

interface IProps {
  children: ReactNode;
  style?: ViewStyle;
}

const ScreenContainer: FC<IProps> = React.memo(({children, style}) => {
  const statusBarHeight = useSelector(
    (state: IRootState) => state.device.statusBarHeight,
    shallowEqual,
  );

  const deviceStatusBarHeight = useMemo(
    () =>
      onNormalizeDeviceStatusBarHeight({
        deviceStatusBarHeight: statusBarHeight,
      }),
    [statusBarHeight],
  );

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: deviceStatusBarHeight + wp('2.5%'),
        },
        style,
      ]}>
      {children}
    </View>
  );
});

export default ScreenContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp('3%'),
    backgroundColor: COLORS.white,
  },
});
