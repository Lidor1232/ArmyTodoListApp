import React, {FC} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../store/reducers/combineReducer.reducer';
import {Loader} from '../../../../components/Loader/Loader';
import {Error} from '../../../../components/Error/Error';
import {UpdateTaskForm} from './UpdateTaskForm/UpdateTaskForm';

interface IProps {}

export const UpdateTaskRequest: FC<IProps> = React.memo(({}) => {
  const isLoading = useSelector(
    (state: IRootState) =>
      state.updateTask.requests.updateTaskRequest.isLoading,
    shallowEqual,
  );
  const isError = useSelector(
    (state: IRootState) => state.updateTask.requests.updateTaskRequest.isError,
    shallowEqual,
  );

  return (
    <>{isLoading ? <Loader /> : isError ? <Error /> : <UpdateTaskForm />}</>
  );
});
