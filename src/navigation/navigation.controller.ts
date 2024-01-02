import {screenNames} from './App/App.constans';

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

export function onNavigateToUpdateTask({navigation}: {navigation: any}): void {
  onNavigate({
    navigation,
    screenName: screenNames.UpdateTask,
    routeParams: {},
  });
}
