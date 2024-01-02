import React, {FC, useEffect} from 'react';
import ScreenContainer from '../../components/ScreenContainer/ScreenContainer';
import {TasksRequest} from './components/TasksRequest/TasksRequest';
import {onMount} from './Tasks.controller';

interface IProps {}

export const Tasks: FC<IProps> = React.memo(({}) => {
  useEffect(() => {
    onMount();
  }, []);

  return (
    <ScreenContainer>
      <TasksRequest />
    </ScreenContainer>
  );
});
