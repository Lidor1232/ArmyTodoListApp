import React, {FC, useCallback} from 'react';
import {UseFormHandleSubmit} from 'react-hook-form';
import {IUpdateTaskForm} from '../UpdateTaskForm';
import Button from '../../../../../../components/Button/Button';
import {onSubmit} from './SubmitButton.controller';
import {useNavigation} from '@react-navigation/native';

interface IProps {
  handleSubmit: UseFormHandleSubmit<IUpdateTaskForm>;
}

export const SubmitButton: FC<IProps> = React.memo(({handleSubmit}) => {
  const navigation = useNavigation();

  const _onSubmit = useCallback(
    (updateTaskValues: IUpdateTaskForm) => {
      onSubmit({
        navigation,
        updateTaskValues,
      });
    },
    [navigation],
  );

  return <Button onPress={handleSubmit(_onSubmit)}>Submit</Button>;
});
