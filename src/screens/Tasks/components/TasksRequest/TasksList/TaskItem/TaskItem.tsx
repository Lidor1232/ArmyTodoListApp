import React, {FC, useCallback, useMemo} from 'react';
import {ITask} from '../../../../../../utills/types';
import {StyleSheet, View} from 'react-native';
import {Text} from '../../../../../../components/Text/Text';
import {COLORS} from '../../../../../../assets/colors/colors';
import {onGetFormattedDate} from '../../../../../../utills/js/dates/dates';
import IconTrash from '../../../../../../assets/svg/trashRed.svg';
import IconEdit from '../../../../../../assets/svg/editOrange.svg';
import {onPressDeleteTask, onPressUpdateTask} from './TaskItem.controller';
import {useNavigation} from '@react-navigation/native';
import {OptionButton} from './UI/OptionButton/OptionButton';
import {CompleteTaskButton} from './CompleteTaskButton/CompleteTaskButton';

interface IProps {
  item: ITask;
}

export const TaskItem: FC<IProps> = React.memo(({item}) => {
  const navigation = useNavigation();

  const formattedCreatedAt = useMemo(
    () =>
      onGetFormattedDate({
        format: 'HH:MM DD-MM-YYYY',
        date: item.createdAt,
      }),
    [item],
  );

  const _onPressUpdateTask = useCallback(() => {
    onPressUpdateTask({
      navigation,
      taskId: item._id,
    });
  }, [navigation, item]);

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <OptionButton onPress={onPressDeleteTask}>
          <IconTrash height={25} width={25} />
        </OptionButton>
        <OptionButton onPress={_onPressUpdateTask}>
          <IconEdit height={25} width={25} />
        </OptionButton>
      </View>
      <Text style={styles.createdAt}>{`נוצר ב - ${formattedCreatedAt}`}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <CompleteTaskButton item={item} />
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
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginBottom: 6,
    fontSize: 16,
    textAlign: 'right',
  },
  description: {
    marginBottom: 16,
    textAlign: 'right',
  },
  createdAt: {
    textAlign: 'right',
    marginBottom: 16,
  },
});
