import React, {FC, useMemo} from 'react';
import {ITask} from '../../../../../../utills/types';
import {StyleSheet, View} from 'react-native';
import {Text} from '../../../../../../components/Text/Text';
import {COLORS} from '../../../../../../assets/colors/colors';
import {onGetFormattedDate} from '../../../../../../utills/js/dates/dates';

interface IProps {
  item: ITask;
}

export const TaskItem: FC<IProps> = React.memo(({item}) => {
  const formattedCreatedAt = useMemo(
    () =>
      onGetFormattedDate({
        format: 'HH:MM DD-MM-YYYY',
        date: item.createdAt,
      }),
    [item],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.createdAt}>{`נוצר ב - ${formattedCreatedAt}`}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginBottom: 24,
  },
  title: {
    marginBottom: 6,
    fontSize: 16,
    textAlign: 'right',
  },
  description: {
    marginBottom: 4,
    textAlign: 'right',
  },
  createdAt: {
    textAlign: 'right',
    marginBottom: 16,
  },
});
