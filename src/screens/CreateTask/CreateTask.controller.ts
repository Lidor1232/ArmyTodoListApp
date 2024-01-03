import {store} from '../../store/store';
import {createTaskReset} from '../../store/actions/createTask.actions';

export function onUnmount(): void {
  store.dispatch(createTaskReset());
}
