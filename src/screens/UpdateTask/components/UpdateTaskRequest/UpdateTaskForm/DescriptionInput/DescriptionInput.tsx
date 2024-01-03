import React, {FC, useCallback} from 'react';
import {Control, Controller} from 'react-hook-form';
import {IUpdateTaskForm, IUpdateTaskRenderForm} from '../UpdateTaskForm';
import {rules} from './DescriptionInput.constans';
import {InputWithValidation} from '../../../../../../components/Form/InputWithValidation/InputWithValidation';
import {StyleSheet} from 'react-native';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../../../store/reducers/combineReducer.reducer';

interface IProps {
  control: Control<IUpdateTaskForm>;
  isError: boolean;
  errorMessage: string | undefined;
}

export const DescriptionInput: FC<IProps> = React.memo(
  ({control, errorMessage, isError}) => {
    const currentDescription = useSelector(
      (state: IRootState) =>
        state.updateTask.requests.getTaskRequest.task?.description,
      shallowEqual,
    );

    const _render = useCallback(
      ({field: {onChange, onBlur, value}}: IUpdateTaskRenderForm) => (
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
        defaultValue={currentDescription}
      />
    );
  },
);

const styles = StyleSheet.create({
  input: {
    marginBottom: 12,
  },
});
