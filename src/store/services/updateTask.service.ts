import {store} from '../store';
import {
  updateTaskFetchFail,
  updateTaskFetchRequest,
  updateTaskFetchSuccess,
  updateTaskGetTaskFetchFail,
  updateTaskGetTaskFetchRequest,
  updateTaskGetTaskFetchSuccess,
} from '../actions/updateTask.actions';
import {getTask, updateTask} from '../../services/api/api';
import {IUpdateTaskForm} from '../../screens/UpdateTask/components/UpdateTaskRequest/UpdateTaskForm/UpdateTaskForm';
import {ITask} from '../../utills/types';

export async function onUpdateTask({
  updateTaskValues,
}: {
  updateTaskValues: IUpdateTaskForm;
}): Promise<ITask | undefined> {
  try {
    store.dispatch(updateTaskFetchRequest());
    const taskId = store.getState().updateTask.taskId;
    if (taskId === null) {
      throw new Error('No task id');
    }
    const updatedTask = await updateTask({
      updateTaskProps: updateTaskValues,
      taskId,
    });
    store.dispatch(
      updateTaskFetchSuccess({
        updatedTask,
      }),
    );
    return updatedTask;
  } catch {
    store.dispatch(updateTaskFetchFail());
  }
}

export async function onGetTask(): Promise<void> {
  try {
    store.dispatch(updateTaskGetTaskFetchRequest());
    const taskId = store.getState().updateTask.taskId;
    if (!taskId) {
      throw new Error('No task id');
    }
    const task = await getTask({
      taskId,
    });
    store.dispatch(
      updateTaskGetTaskFetchSuccess({
        task,
      }),
    );
  } catch {
    store.dispatch(updateTaskGetTaskFetchFail());
  }
}
