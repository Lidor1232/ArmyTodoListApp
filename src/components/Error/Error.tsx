import {StyleSheet, View, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import {Text} from '../Text/Text';

interface IProps {
  errorMessage?: string;
  style?: ViewStyle;
}

export const Error: FC<IProps> = React.memo(
  ({errorMessage = 'Something went wrong...', style}) => {
    return (
      <View style={{...styles.container, ...style}}>
        <Text>{errorMessage}</Text>
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
});
