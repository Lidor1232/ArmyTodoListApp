import {ITask, ITaskStatus} from '../../../../../../../utills/types';
import {store} from '../../../../../../../store/store';
import {tasksRemoveTask} from '../../../../../../../store/actions/tasks.actions';
import {updateTask} from '../../../../../../../services/api/api';
import Toast from 'react-native-toast-message';

export function onShowCompletedTaskToast(): void {
  Toast.show({
    type: 'info',
    text1: 'Great!',
    text2: 'Changed task status to completed successfully',
  });
}

export async function onPress({task}: {task: ITask}): Promise<void> {
  store.dispatch(
    tasksRemoveTask({
      taskId: task._id,
    }),
  );
  await updateTask({
    updateTaskProps: {
      status: ITaskStatus.Completed,
    },
    taskId: task._id,
  });
  onShowCompletedTaskToast();
}
