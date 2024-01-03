import React, {FC, useCallback} from 'react';
import {Control} from 'react-hook-form';
import {IUpdateTaskForm, IUpdateTaskRenderForm} from '../UpdateTaskForm';
import {Controller} from 'react-hook-form';
import {rules} from './TitleInput.constans';
import {InputWithValidation} from '../../../../../../components/Form/InputWithValidation/InputWithValidation';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../../../store/reducers/combineReducer.reducer';

interface IProps {
  control: Control<IUpdateTaskForm>;
  isError: boolean;
  errorMessage: string | undefined;
}

export const TitleInput: FC<IProps> = React.memo(
  ({control, isError, errorMessage}) => {
    const currentTitle = useSelector(
      (state: IRootState) =>
        state.updateTask.requests.getTaskRequest.task?.title,
      shallowEqual,
    );

    const _render = useCallback(
      ({field: {onChange, onBlur, value}}: IUpdateTaskRenderForm) => (
        <InputWithValidation
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
          placeholder="Title"
          errorMessage={errorMessage}
          isError={isError}
        />
      ),
      [isError, errorMessage],
    );

    return (
      <Controller
        control={control}
        render={_render}
        name="title"
        rules={rules}
        defaultValue={currentTitle}
      />
    );
  },
);
