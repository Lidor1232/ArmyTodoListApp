export function onGetIsLoading({
  isLoadingGetTask,
  isLoadingUpdateTask,
}: {
  isLoadingUpdateTask: boolean;
  isLoadingGetTask: boolean;
}): boolean {
  return isLoadingGetTask || isLoadingUpdateTask;
}

export function onGetIsError({
  isErrorGetTask,
  isErrorUpdateTask,
}: {
  isErrorUpdateTask: boolean;
  isErrorGetTask: boolean;
}): boolean {
  return isErrorGetTask || isErrorUpdateTask;
}
