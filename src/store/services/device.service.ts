export function onNormalizeDeviceStatusBarHeight({
  deviceStatusBarHeight,
}: {
  deviceStatusBarHeight: number | null;
}): number {
  return deviceStatusBarHeight ? deviceStatusBarHeight : 0;
}
