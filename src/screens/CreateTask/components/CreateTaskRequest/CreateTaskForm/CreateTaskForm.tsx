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

export interface ICreateTaskForm {
  title: string;
  description: string;
}

export interface ICreateTaskRenderForm {
  field: ControllerRenderProps<ICreateTaskForm, any>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<ICreateTaskForm>;
}

export const CreateTaskForm: FC<IProps> = React.memo(({}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<ICreateTaskForm>();

  return (
    <>
      <TitleInput
        control={control}
        isError={!!errors.title}
        errorMessage={errors.title?.message}
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
