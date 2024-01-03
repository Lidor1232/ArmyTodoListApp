import {StyleSheet} from 'react-native';
import React, {FC, useCallback} from 'react';
import {InputWithValidation} from '../../../../../../components/Form/InputWithValidation/InputWithValidation';
import {Control, Controller} from 'react-hook-form';
import {rules} from './DescriptionInput.constans';
import {ICreateTaskForm, ICreateTaskRenderForm} from '../CreateTaskForm';

interface IProps {
  control: Control<ICreateTaskForm>;
  isError: boolean;
  errorMessage: string | undefined;
}

export const DescriptionInput: FC<IProps> = React.memo(
  ({control, isError, errorMessage}) => {
    const _render = useCallback(
      ({field: {onChange, onBlur, value}}: ICreateTaskRenderForm) => (
        <InputWithValidation
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
          placeholder="Description"
          isError={isError}
          errorMessage={errorMessage}
          style={styles.input}
        />
      ),
      [isError, errorMessage],
    );

    return (
      <Controller
        control={control}
        render={_render}
        name="description"
        rules={rules}
      />
    );
  },
);

const styles = StyleSheet.create({
  input: {
    marginBottom: 12,
  },
});
