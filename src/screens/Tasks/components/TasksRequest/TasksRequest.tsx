import React, {FC} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../store/reducers/combineReducer.reducer';
import {Loader} from '../../../../components/Loader/Loader';
import {Error} from '../../../../components/Error/Error';
import {TasksList} from './TasksList/TasksList';

interface IProps {}

export const TasksRequest: FC<IProps> = React.memo(({}) => {
  const isLoading = useSelector(
    (state: IRootState) => state.tasks.requests.tasksRequest.isLoading,
    shallowEqual,
  );
  const isError = useSelector(
    (state: IRootState) => state.tasks.requests.tasksRequest.isError,
    shallowEqual,
  );

  return <>{isLoading ? <Loader /> : isError ? <Error /> : <TasksList />}</>;
});
