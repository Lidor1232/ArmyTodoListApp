import {onNavigateToUpdateTask} from '../../../../../../navigation/navigation.controller';
import {Alert} from 'react-native';

export function onDeleteTask() {}

export function onPressDeleteTask(): void {
  Alert.alert(
    'Are you sure you want to delete',
    'Deleting this task is delete',
    [
      {
        text: 'Delete',
        onPress: function () {},
        style: 'destructive',
      },
      {
        text: 'Cancel',
        onPress: function () {},
        style: 'cancel',
      },
    ],
  );
}

export function onPressUpdateTask({
  navigation,
  taskId,
}: {
  navigation: any;
  taskId: string;
}): void {
  onNavigateToUpdateTask({
    navigation,
    initData: {
      taskId,
    },
  });
}
