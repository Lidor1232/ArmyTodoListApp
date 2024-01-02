import {StyleSheet, TextStyle} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {COLORS} from '../../assets/colors/colors';
import {Text as TextComponent} from 'react-native';

interface IProps {
  children: ReactNode;
  style?: TextStyle;
}

export const Text: FC<IProps> = React.memo(({style, children}) => {
  return (
    <TextComponent
      style={{
        ...styles.text,
        ...style,
      }}>
      {children}
    </TextComponent>
  );
});

const styles = StyleSheet.create({
  text: {
    color: COLORS.black,
  },
});
