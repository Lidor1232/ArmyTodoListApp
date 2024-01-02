import {onNavigateToUpdateTask} from '../../../../../../navigation/navigation.controller';

export function onPressDeleteTask(): void {
  console.log('Press');
}

export function onPressUpdateTask({navigation}: {navigation: any}): void {
  onNavigateToUpdateTask({
    navigation,
  });
}
