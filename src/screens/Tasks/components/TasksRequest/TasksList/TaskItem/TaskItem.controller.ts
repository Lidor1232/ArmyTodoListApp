import {onNavigateToUpdateTask} from '../../../../../../navigation/navigation.controller';
import {ITask, ITaskStatus} from '../../../../../../utills/types';
import {store} from '../../../../../../store/store';
import {tasksRemoveTask} from '../../../../../../store/actions/tasks.actions';
import {updateTask} from '../../../../../../services/api/api';
import Toast from 'react-native-toast-message';

export function onShowDeletedTaskToast(): void {
  Toast.show({
    type: 'info',
    text1: 'Deleted!',
    text2: 'Changed task status to deleted successfully',
  });
}

export async function onPressDeleteTask({item}: {item: ITask}): Promise<void> {
  await updateTask({
    updateTaskProps: {
      status: ITaskStatus.Deleted,
    },
    taskId: item._id,
  });
  store.dispatch(
    tasksRemoveTask({
      taskId: item._id,
    }),
  );
  onShowDeletedTaskToast();
}

export function onPressUpdateTask({
  navigation,
  taskId,
}: {
  navigation: any;
  taskId: string;
}): void {
  onNavigateToUpdateTask({
    navigation,
    initData: {
      taskId,
    },
  });
}
