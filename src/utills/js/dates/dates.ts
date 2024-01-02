import moment from 'moment';

export function onGetFormattedDate({
  date,
  format,
}: {
  date: string;
  format: string;
}): string {
  return moment(date).format(format);
}
