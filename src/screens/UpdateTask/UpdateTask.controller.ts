import {store} from '../../store/store';
import {updateTaskReset} from '../../store/actions/updateTask.actions';

export function onUnmount(): void {
  store.dispatch(updateTaskReset());
}
