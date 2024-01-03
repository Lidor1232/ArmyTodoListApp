import {StyleSheet} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {Text} from '../../../../../../../../components/Text/Text';

interface IProps {
  children: ReactNode;
}

export const SectionTitle: FC<IProps> = React.memo(({children}) => {
  return <Text style={styles.title}>{children}</Text>;
});

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    marginBottom: 7,
    fontWeight: '500',
  },
});
