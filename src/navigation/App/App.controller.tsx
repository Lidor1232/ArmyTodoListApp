import React, {lazy, Suspense} from 'react';
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

export function onTasksComponent(props: {}) {
  return (
    <Suspense fallback={<Loader color={COLORS.white} />}>
      <Tasks {...props} />
    </Suspense>
  );
}

export function onCreateTaskComponent(props: {}) {
  return (
    <Suspense fallback={<Loader color={COLORS.white} />}>
      <CreateTask {...props} />
    </Suspense>
  );
}

export function onUpdateTaskComponent(props: {}) {
  return (
    <Suspense fallback={<Loader color={COLORS.white} />}>
      <UpdateTask {...props} />
    </Suspense>
  );
}
