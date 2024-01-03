import React, {FC, useMemo} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../store/reducers/combineReducer.reducer';
import {Loader} from '../../../../components/Loader/Loader';
import {Error} from '../../../../components/Error/Error';
import {UpdateTaskForm} from './UpdateTaskForm/UpdateTaskForm';
import {onGetIsError, onGetIsLoading} from './UpdateTaskRequest.controller';

interface IProps {}

export const UpdateTaskRequest: FC<IProps> = React.memo(({}) => {
  const isLoadingUpdateTask = useSelector(
    (state: IRootState) =>
      state.updateTask.requests.updateTaskRequest.isLoading,
    shallowEqual,
  );
  const isLoadingGetTask = useSelector(
    (state: IRootState) => state.updateTask.requests.getTaskRequest.isLoading,
    shallowEqual,
  );
  const isErrorUpdateTask = useSelector(
    (state: IRootState) => state.updateTask.requests.updateTaskRequest.isError,
    shallowEqual,
  );
  const isErrorGetTask = useSelector(
    (state: IRootState) => state.updateTask.requests.getTaskRequest.isError,
    shallowEqual,
  );

  const isLoading = useMemo(
    () =>
      onGetIsLoading({
        isLoadingGetTask,
        isLoadingUpdateTask,
      }),
    [isLoadingUpdateTask, isLoadingGetTask],
  );
  const isError = useMemo(
    () =>
      onGetIsError({
        isErrorUpdateTask,
        isErrorGetTask,
      }),
    [isErrorUpdateTask, isErrorGetTask],
  );

  return (
    <>{isLoading ? <Loader /> : isError ? <Error /> : <UpdateTaskForm />}</>
  );
});
