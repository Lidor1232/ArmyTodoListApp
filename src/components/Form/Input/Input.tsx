import {KeyboardTypeOptions, StyleSheet, TextStyle} from 'react-native';
import React, {FC} from 'react';
import {TextInput} from 'react-native';
import {COLORS} from '../../../assets/colors/colors';

interface IProps {
  value: string;
  placeholder: string;
  style?: TextStyle;
  onChangeText: (value: string) => void;
  keyboardType?: KeyboardTypeOptions;
  autoFocus?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  onBlur?: () => void;
  maxLength?: number;
  defaultValue?: string;
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center';
}

export const Input: FC<IProps> = React.memo(
  ({
    value,
    onChangeText,
    placeholder,
    style,
    keyboardType,
    autoFocus,
    multiline,
    numberOfLines,
    onBlur,
    maxLength,
    defaultValue,
    textAlignVertical,
  }) => {
    return (
      <TextInput
        defaultValue={defaultValue}
        numberOfLines={numberOfLines}
        multiline={multiline}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor={'#444'}
        style={[styles.input, style]}
        selectionColor={COLORS.black}
        keyboardType={keyboardType}
        autoFocus={autoFocus}
        onBlur={onBlur}
        maxLength={maxLength}
        textAlignVertical={textAlignVertical}
      />
    );
  },
);

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.white,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 5,
    fontSize: 16,
    borderWidth: 1,
    borderColor: COLORS.black,
    color: COLORS.black,
    marginVertical: 12,
    textAlign: 'left',
  },
});
