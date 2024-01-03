import {StyleSheet, View} from 'react-native';
import React, {FC, ReactNode} from 'react';

interface IProps {
  children: ReactNode;
}

export const SectionContainer: FC<IProps> = React.memo(({children}) => {
  return <View style={styles.container}>{children}</View>;
});

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
  },
});
