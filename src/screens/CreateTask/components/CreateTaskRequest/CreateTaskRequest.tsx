import React, {FC} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../store/reducers/combineReducer.reducer';
import {Loader} from '../../../../components/Loader/Loader';
import {Error} from '../../../../components/Error/Error';
import {CreateTaskForm} from './CreateTaskForm/CreateTaskForm';

interface IProps {}

export const CreateTaskRequest: FC<IProps> = React.memo(({}) => {
  const isLoading = useSelector(
    (state: IRootState) =>
      state.createTask.requests.createTaskRequest.isLoading,
    shallowEqual,
  );
  const isError = useSelector(
    (state: IRootState) => state.createTask.requests.createTaskRequest.isError,
    shallowEqual,
  );

  return (
    <>{isLoading ? <Loader /> : isError ? <Error /> : <CreateTaskForm />}</>
  );
});
