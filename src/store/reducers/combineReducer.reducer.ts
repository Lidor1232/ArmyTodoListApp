import {combineReducers} from 'redux';
import {
  reducer as deviceReducer,
  IState as IDeviceState,
} from './device.reducer';
import {reducer as tasksReducer, IState as ITasksState} from './tasks.reducer';
import {
  reducer as updateTaskReducer,
  IState as IUpdateTaskState,
} from './updateTask.reducer';
import {
  reducer as createTaskReducer,
  IState as ICreateTaskState,
} from './createTask.reducer';

export default combineReducers({
  device: deviceReducer,
  tasks: tasksReducer,
  updateTask: updateTaskReducer,
  createTask: createTaskReducer,
});

export interface IRootState {
  device: IDeviceState;
  tasks: ITasksState;
  updateTask: IUpdateTaskState;
  createTask: ICreateTaskState;
}
