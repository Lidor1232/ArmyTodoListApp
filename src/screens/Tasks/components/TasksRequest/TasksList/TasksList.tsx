import {FlatList} from 'react-native';
import React, {FC} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../../store/reducers/combineReducer.reducer';
import {
  onEndReached,
  onKeyExtractor,
  onRenderItem,
} from './TasksList.controller';
import {ListFooter} from './ListFooter/ListFooter';
import {NoTasks} from './NoTasks/NoTasks';

interface IProps {}

export const TasksList: FC<IProps> = React.memo(({}) => {
  const tasks = useSelector(
    (state: IRootState) => state.tasks.requests.tasksRequest.tasks,
    shallowEqual,
  );

  return (
    <FlatList
      data={tasks}
      showsVerticalScrollIndicator={false}
      renderItem={onRenderItem}
      keyExtractor={onKeyExtractor}
      ListFooterComponent={ListFooter}
      onEndReached={onEndReached}
      ListEmptyComponent={NoTasks}
    />
  );
});
