import {FlatList} from 'react-native';
import React, {FC} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../../store/reducers/combineReducer.reducer';
import {onKeyExtractor, onRenderItem} from './TasksList.controller';

interface IProps {}

export const TasksList: FC<IProps> = React.memo(({}) => {
  const tasks = useSelector(
    (state: IRootState) => state.tasks.requests.tasksRequest.tasks,
    shallowEqual,
  );

  return (
    <FlatList
      data={tasks}
      renderItem={onRenderItem}
      keyExtractor={onKeyExtractor}
    />
  );
});
