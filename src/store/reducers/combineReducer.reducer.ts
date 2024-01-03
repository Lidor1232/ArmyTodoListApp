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

export default combineReducers({
  device: deviceReducer,
  tasks: tasksReducer,
  updateTask: updateTaskReducer,
});

export interface IRootState {
  device: IDeviceState;
  tasks: ITasksState;
  updateTask: IUpdateTaskState;
}
