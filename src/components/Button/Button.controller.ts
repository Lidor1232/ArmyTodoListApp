export function onGetContentContainerHeight({
  fontSize = 16,
}: {
  fontSize: number | undefined;
}): number {
  return 1.5625 * fontSize;
}
