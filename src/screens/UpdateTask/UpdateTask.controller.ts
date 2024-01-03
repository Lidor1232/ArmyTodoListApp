import {store} from '../../store/store';
import {updateTaskReset} from '../../store/actions/updateTask.actions';
import {onGetTask} from '../../store/services/updateTask.service';

export function onUnmount(): void {
  store.dispatch(updateTaskReset());
}

export function onMount(): void {
  onGetTask();
}
