import React from 'react';
import {ITask} from '../../../../../utills/types';
import {TaskItem} from './TaskItem/TaskItem';
import {store} from '../../../../../store/store';
import {onGetNextTasks} from '../../../../../store/services/tasks.service';

export function onEndReached() {
  const isFetchAll = store.getState().tasks.requests.tasksRequest.isFetchAll;
  if (!isFetchAll) {
    onGetNextTasks();
  }
}

export function onRenderItem({item}: {item: ITask; index: number}) {
  return <TaskItem item={item} />;
}

export function onKeyExtractor(item: ITask) {
  return item._id;
}
