import {
  KeyboardTypeOptions,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import Input from '../Input/Input';
import {Text} from '../../Text/Text';

interface IProps {
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  style?: ViewStyle;
  errorMessage?: string;
  isError: boolean;
  keyboardType?: KeyboardTypeOptions;
  onBlur?: () => void;
  inputStyle?: TextStyle;
  defaultValue?: string;
}

export const InputWithValidation: FC<IProps> = React.memo(
  ({
    value,
    onChangeText,
    placeholder,
    errorMessage,
    isError,
    keyboardType,
    style,
    onBlur,
    inputStyle,
    defaultValue,
  }) => {
    return (
      <View style={{...styles.container, ...style}}>
        <Input
          defaultValue={defaultValue}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          keyboardType={keyboardType}
          onBlur={onBlur}
          style={{
            ...inputStyle,
            ...(isError ? styles.errorMessageVisibleInput : null),
          }}
        />
        {isError && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {},
  errorMessage: {
    color: '#FF6666',
    textAlign: 'left',
    fontWeight: '600',
    marginBottom: 3,
    fontSize: 15,
  },
  errorMessageVisibleInput: {
    marginBottom: 9,
  },
});
