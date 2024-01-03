import React, {FC, useEffect} from 'react';
import ScreenContainer from '../../components/Screen/ScreenContainer/ScreenContainer';
import {TasksRequest} from './components/TasksRequest/TasksRequest';
import {onMount} from './Tasks.controller';
import {Text} from '../../components/Text/Text';
import {StyleSheet} from 'react-native';
import {CreateTaskButton} from './components/CreateTaskButton/CreateTaskButton';

interface IProps {}

export const Tasks: FC<IProps> = React.memo(({}) => {
  useEffect(() => {
    onMount();
  }, []);

  return (
    <ScreenContainer>
      <Text style={styles.title}>Tasks</Text>
      <CreateTaskButton />
      <TasksRequest />
    </ScreenContainer>
  );
});

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 40,
    fontWeight: '600',
  },
});
