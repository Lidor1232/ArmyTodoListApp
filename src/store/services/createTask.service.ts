import {store} from '../store';
import {
  createTaskFetchFail,
  createTaskFetchRequest,
  createTaskFetchSuccess,
} from '../actions/createTask.actions';
import {createTask} from '../../services/api/api';
import {ICreateTaskForm} from '../../screens/CreateTask/components/CreateTaskRequest/CreateTaskForm/CreateTaskForm';
import {ITask} from '../../utills/types';

export async function onCreateTask({
  task,
}: {
  task: ICreateTaskForm;
}): Promise<ITask | undefined> {
  try {
    store.dispatch(createTaskFetchRequest());
    const createdTask = await createTask({
      task,
    });
    store.dispatch(
      createTaskFetchSuccess({
        createdTask,
      }),
    );
    return createdTask;
  } catch {
    store.dispatch(createTaskFetchFail());
  }
}
