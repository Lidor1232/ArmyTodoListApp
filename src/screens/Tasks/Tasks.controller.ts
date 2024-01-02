import {onGetTasks} from '../../store/services/tasks.service';

export function onMount() {
  onGetTasks();
}
