const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
//separated from component for a clarity
export default function getFormattedDate(date) {
  const day = new Date(date).getUTCDay();
  const month = new Date(date).getUTCMonth();
  const monthDay = new Date(date).getUTCDate();

  return `${days[day]}, ${monthDay} ${months[month]}`;
}