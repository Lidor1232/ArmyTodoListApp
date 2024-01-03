import React, {FC, useEffect} from 'react';
import ScreenContainer from '../../components/Screen/ScreenContainer/ScreenContainer';
import {onUnmount} from './CreateTask.controller';
import {CreateTaskRequest} from './components/CreateTaskRequest/CreateTaskRequest';

interface IProps {}

export const CreateTask: FC<IProps> = React.memo(({}) => {
  useEffect(() => {
    return function () {
      onUnmount();
    };
  }, []);

  return (
    <ScreenContainer>
      <CreateTaskRequest />
    </ScreenContainer>
  );
});
