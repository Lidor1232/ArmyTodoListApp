import {StyleSheet, TextStyle} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {Text} from '../../../../../../../../components/Text/Text';

interface IProps {
  children: ReactNode;
  style?: TextStyle;
}

export const SectionText: FC<IProps> = React.memo(({children, style}) => {
  return (
    <Text
      style={{
        ...styles.text,
        ...style,
      }}>
      {children}
    </Text>
  );
});

const styles = StyleSheet.create({
  text: {
    marginBottom: 16,
    fontSize: 14,
    textAlign: 'left',
  },
});
