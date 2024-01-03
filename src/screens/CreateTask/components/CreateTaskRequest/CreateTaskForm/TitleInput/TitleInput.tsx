import React, {FC, useCallback} from 'react';
import {Control, Controller} from 'react-hook-form';
import {ICreateTaskForm, ICreateTaskRenderForm} from '../CreateTaskForm';
import {InputWithValidation} from '../../../../../../components/Form/InputWithValidation/InputWithValidation';
import {rules} from './TitleInput.constans';

interface IProps {
  control: Control<ICreateTaskForm>;
  isError: boolean;
  errorMessage: string | undefined;
}

export const TitleInput: FC<IProps> = React.memo(
  ({control, isError, errorMessage}) => {
    const _render = useCallback(
      ({field: {onChange, onBlur, value}}: ICreateTaskRenderForm) => (
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
      />
    );
  },
);
