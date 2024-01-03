import {onUpdateTask} from '../../../../../../store/services/updateTask.service';
import {IUpdateTaskForm} from '../UpdateTaskForm';
import Toast from 'react-native-toast-message';

export function onShowSuccessUpdateTaskToast(): void {
  Toast.show({
    type: 'info',
    text1: 'Update task successfully',
  });
}

export async function onSubmit({
  updateTaskValues,
  navigation,
}: {
  updateTaskValues: IUpdateTaskForm;
  navigation: any;
}): Promise<void> {
  const updatedTask = await onUpdateTask({
    updateTaskValues,
  });
  if (updatedTask) {
    navigation.goBack();
    onShowSuccessUpdateTaskToast();
  }
}
