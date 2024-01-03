import React, {FC, useCallback, useMemo} from 'react';
import {ITask} from '../../../../../../utills/types';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../../../../../assets/colors/colors';
import {onGetFormattedDate} from '../../../../../../utills/js/dates/dates';
import IconTrash from '../../../../../../assets/svg/trashRed.svg';
import IconEdit from '../../../../../../assets/svg/editOrange.svg';
import {onPressDeleteTask, onPressUpdateTask} from './TaskItem.controller';
import {useNavigation} from '@react-navigation/native';
import {OptionButton} from './UI/OptionButton/OptionButton';
import {CompleteTaskButton} from './CompleteTaskButton/CompleteTaskButton';
import {SectionContainer} from './UI/SectionContainer/SectionContainer';
import {SectionTitle} from './UI/SectionTitle/SectionTitle';
import {SectionText} from './UI/SectionText/SectionText';

interface IProps {
  item: ITask;
  index: number;
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

  const _onPressDeleteTask = useCallback(() => {
    onPressDeleteTask({
      item,
    });
  }, [item]);

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <OptionButton onPress={_onPressDeleteTask}>
          <IconTrash height={25} width={25} />
        </OptionButton>
        <OptionButton onPress={_onPressUpdateTask}>
          <IconEdit height={25} width={25} />
        </OptionButton>
      </View>
      <SectionContainer>
        <SectionTitle>Created At</SectionTitle>
        <SectionText>{formattedCreatedAt}</SectionText>
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>Title</SectionTitle>
        <SectionText>{item.title}</SectionText>
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>Description</SectionTitle>
        <SectionText>{item.description}</SectionText>
      </SectionContainer>
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
    marginBottom: 24,
  },
});
