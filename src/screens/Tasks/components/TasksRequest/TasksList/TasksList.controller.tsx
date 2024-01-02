import React from 'react';
import {ITask} from '../../../../../utills/types';
import {TaskItem} from './TaskItem/TaskItem';

export function onRenderItem({item}: {item: ITask; index: number}) {
  return <TaskItem item={item} />;
}

export function onKeyExtractor(item: ITask) {
  return item._id;
}
