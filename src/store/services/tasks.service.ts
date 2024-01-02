import {store} from '../store';
import {
  tasksFetchAll,
  tasksFetchFail,
  tasksFetchMoreFail,
  tasksFetchMoreRequest,
  tasksFetchMoreSuccess,
  tasksFetchRequest,
  tasksFetchSuccess,
} from '../actions/tasks.actions';
import {getTasks} from '../../services/api/api';

export async function onGetTasks(): Promise<void> {
  try {
    store.dispatch(tasksFetchRequest());
    const tasksRes = await getTasks({
      limit: 10,
      page: 1,
    });
    if (tasksRes.tasks.length < 10) {
      store.dispatch(tasksFetchAll());
    }
    store.dispatch(
      tasksFetchSuccess({
        tasks: tasksRes.tasks,
      }),
    );
  } catch {
    store.dispatch(tasksFetchFail());
  }
}

export async function onGetNextTasks(): Promise<void> {
  try {
    store.dispatch(tasksFetchMoreRequest());
    const page = store.getState().tasks.requests.tasksRequest.page;
    const tasksRes = await getTasks({
      limit: 10,
      page,
    });
    if (tasksRes.tasks.length < 10) {
      store.dispatch(tasksFetchAll());
    }
    store.dispatch(
      tasksFetchMoreSuccess({
        tasks: tasksRes.tasks,
      }),
    );
  } catch {
    store.dispatch(tasksFetchMoreFail());
  }
}
