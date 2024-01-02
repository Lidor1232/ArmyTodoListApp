import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screenNames, screensOptions} from './App.constans';
import {
  onCreateTaskComponent,
  onTasksComponent,
  onUpdateTaskComponent,
} from './App.controller';

interface IProps {}

const Stack = createStackNavigator();

export const AppNavigation: FC<IProps> = React.memo(({}) => {
  return (
    <Stack.Navigator initialRouteName={screenNames.Tasks}>
      <Stack.Screen
        name={screenNames.Tasks}
        component={onTasksComponent}
        options={screensOptions.tasks}
      />
      <Stack.Screen
        name={screenNames.CreateTask}
        component={onCreateTaskComponent}
        options={screensOptions.createTask}
      />
      <Stack.Screen
        name={screenNames.UpdateTask}
        component={onUpdateTaskComponent}
        options={screensOptions.updateTask}
      />
    </Stack.Navigator>
  );
});
