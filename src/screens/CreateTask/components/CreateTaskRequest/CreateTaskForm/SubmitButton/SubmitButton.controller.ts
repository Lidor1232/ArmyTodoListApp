import {ICreateTaskForm} from '../CreateTaskForm';
import {onCreateTask} from '../../../../../../store/services/createTask.service';
import Toast from 'react-native-toast-message';
import {store} from '../../../../../../store/store';
import {tasksAddTask} from '../../../../../../store/actions/tasks.actions';

export function onShowSuccessUpdateTaskToast(): void {
  Toast.show({
    type: 'info',
    text1: 'Created task successfully',
  });
}

export async function onSubmit({
  createTaskValues,
  navigation,
}: {
  navigation: any;
  createTaskValues: ICreateTaskForm;
}): Promise<void> {
  const createdTask = await onCreateTask({
    task: createTaskValues,
  });
  if (createdTask) {
    navigation.goBack();
    onShowSuccessUpdateTaskToast();
    store.dispatch(
      tasksAddTask({
        task: createdTask,
      }),
    );
  }
}
