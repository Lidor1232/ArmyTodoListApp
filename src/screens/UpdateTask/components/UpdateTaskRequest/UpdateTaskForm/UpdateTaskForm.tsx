import React, {FC} from 'react';
import {
  ControllerFieldState,
  ControllerRenderProps,
  useForm,
  UseFormStateReturn,
} from 'react-hook-form';
import {TitleInput} from './TitleInput/TitleInput';
import {DescriptionInput} from './DescriptionInput/DescriptionInput';
import {SubmitButton} from './SubmitButton/SubmitButton';

interface IProps {}

export interface IUpdateTaskForm {
  title: string;
  description: string;
}

export interface IUpdateTaskRenderForm {
  field: ControllerRenderProps<IUpdateTaskForm, any>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<IUpdateTaskForm>;
}

export const UpdateTaskForm: FC<IProps> = React.memo(({}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IUpdateTaskForm>();

  return (
    <>
      <TitleInput
        isError={!!errors.title}
        errorMessage={errors.title?.message}
        control={control}
      />
      <DescriptionInput
        control={control}
        isError={!!errors.description}
        errorMessage={errors.description?.message}
      />
      <SubmitButton handleSubmit={handleSubmit} />
    </>
  );
});
