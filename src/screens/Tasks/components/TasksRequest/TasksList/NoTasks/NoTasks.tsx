import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {Text} from '../../../../../../components/Text/Text';

interface IProps {}

export const NoTasks: FC<IProps> = React.memo(({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No Tasks</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
