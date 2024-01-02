import {combineReducers} from 'redux';
import {
  reducer as deviceReducer,
  IState as IDeviceState,
} from './device.reducer';
import {reducer as tasksReducer, IState as ITasksState} from './tasks.reducer';

export default combineReducers({
  device: deviceReducer,
  tasks: tasksReducer,
});

export interface IRootState {
  device: IDeviceState;
  tasks: ITasksState;
}
