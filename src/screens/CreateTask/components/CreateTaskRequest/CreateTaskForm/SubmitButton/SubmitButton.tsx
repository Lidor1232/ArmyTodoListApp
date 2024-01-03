import React, {FC, useCallback} from 'react';
import Button from '../../../../../../components/Button/Button';
import {UseFormHandleSubmit} from 'react-hook-form';
import {ICreateTaskForm} from '../CreateTaskForm';
import {onSubmit} from './SubmitButton.controller';
import {useNavigation} from '@react-navigation/native';

interface IProps {
  handleSubmit: UseFormHandleSubmit<ICreateTaskForm>;
}

export const SubmitButton: FC<IProps> = React.memo(({handleSubmit}) => {
  const navigation = useNavigation();

  const _onSubmit = useCallback(
    (createTaskValues: ICreateTaskForm) => {
      onSubmit({
        createTaskValues,
        navigation,
      });
    },
    [navigation],
  );

  return <Button onPress={handleSubmit(_onSubmit)}>Submit</Button>;
});
