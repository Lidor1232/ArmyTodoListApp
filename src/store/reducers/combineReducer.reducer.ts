import {combineReducers} from 'redux';
import {
  reducer as deviceReducer,
  IState as IDeviceState,
} from './device.reducer';

export default combineReducers({
  device: deviceReducer,
});

export interface IRootState {
  device: IDeviceState;
}
