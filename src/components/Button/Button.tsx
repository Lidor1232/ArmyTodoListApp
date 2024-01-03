import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC, ReactNode, useCallback} from 'react';
import {onGetContentContainerHeight} from './Button.controller';
import {Text} from '../Text/Text';
import {COLORS} from '../../assets/colors/colors';

interface IProps {
  children: string;
  labelStyle?: TextStyle;
  style?: ViewStyle;
  isLoading?: boolean;
  onPress: () => void;
  hitSlop?: number;
  icon?: ReactNode;
  disabled?: boolean;
}

const Button: FC<IProps> = React.memo(
  ({
    children,
    labelStyle,
    style,
    onPress,
    isLoading = false,
    hitSlop = 1,
    icon,
    disabled = false,
  }) => {
    const contentContainerHeight = onGetContentContainerHeight({
      fontSize: labelStyle?.fontSize,
    });

    const _onPress = useCallback(() => {
      !disabled && onPress();
    }, [disabled, onPress]);

    return (
      <Pressable
        style={{
          ...styles.button,
          ...(disabled ? styles.buttonDisabled : null),
          ...style,
        }}
        onPress={_onPress}
        hitSlop={hitSlop}>
        {icon ? <View style={styles.iconContainer}>{icon}</View> : null}
        <View
          style={{height: contentContainerHeight, ...styles.contentContainer}}>
          {!isLoading ? (
            <Text
              style={{
                ...styles.label,
                ...labelStyle,
              }}>
              {children}
            </Text>
          ) : (
            <ActivityIndicator color={COLORS.white} />
          )}
        </View>
      </Pressable>
    );
  },
);

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 12,
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  contentContainer: {
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: COLORS.grey,
  },
  label: {
    color: COLORS.white,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 1,
    fontSize: 16,
  },
  iconContainer: {
    paddingHorizontal: 7,
  },
});
