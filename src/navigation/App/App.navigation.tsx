import React, {FC, lazy, Suspense, useCallback} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screenNames, screensOptions} from './App.constans';
import {Loader} from '../../components/Loader/Loader';
import {COLORS} from '../../assets/colors/colors';
const Tasks = lazy(() =>
  import('../../screens/Tasks/Tasks').then(module => ({
    default: module.Tasks,
  })),
);
const CreateTask = lazy(() =>
  import('../../screens/CreateTask/CreateTask').then(module => ({
    default: module.CreateTask,
  })),
);
const UpdateTask = lazy(() =>
  import('../../screens/UpdateTask/UpdateTask').then(module => ({
    default: module.UpdateTask,
  })),
);

interface IProps {}

const Stack = createStackNavigator();

export const AppNavigation: FC<IProps> = React.memo(({}) => {
  const _onTasksComponent = useCallback((props: {}) => {
    return (
      <Suspense fallback={<Loader color={COLORS.white} />}>
        <Tasks {...props} />
      </Suspense>
    );
  }, []);

  const _onCreateTaskComponent = useCallback((props: {}) => {
    return (
      <Suspense fallback={<Loader color={COLORS.white} />}>
        <CreateTask {...props} />
      </Suspense>
    );
  }, []);

  const _onUpdateTaskComponent = useCallback((props: {}) => {
    return (
      <Suspense fallback={<Loader color={COLORS.white} />}>
        <UpdateTask {...props} />
      </Suspense>
    );
  }, []);

  return (
    <Stack.Navigator initialRouteName={screenNames.Tasks}>
      <Stack.Screen
        name={screenNames.Tasks}
        component={_onTasksComponent}
        options={screensOptions.tasks}
      />
      <Stack.Screen
        name={screenNames.CreateTask}
        component={_onCreateTaskComponent}
        options={screensOptions.createTask}
      />
      <Stack.Screen
        name={screenNames.UpdateTask}
        component={_onUpdateTaskComponent}
        options={screensOptions.updateTask}
      />
    </Stack.Navigator>
  );
});
