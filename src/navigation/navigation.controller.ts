import {screenNames} from './App/App.constans';
import {store} from '../store/store';
import {updateTaskSetTaskId} from '../store/actions/updateTask.actions';

export function onNavigate({
  screenName,
  routeParams,
  navigation,
}: {
  screenName: string;
  routeParams?: any;
  navigation: any;
}): void {
  navigation.navigate(screenName, routeParams);
}

export function onNavigateToCreateTask({navigation}: {navigation: any}): void {
  onNavigate({
    navigation,
    routeParams: {},
    screenName: screenNames.CreateTask,
  });
}

export function onNavigateToUpdateTask({
  navigation,
  initData,
}: {
  navigation: any;
  initData: {
    taskId: string;
  };
}): void {
  store.dispatch(
    updateTaskSetTaskId({
      taskId: initData.taskId,
    }),
  );
  onNavigate({
    navigation,
    screenName: screenNames.UpdateTask,
    routeParams: initData,
  });
}
