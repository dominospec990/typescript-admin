import { EventInput } from '@fullcalendar/react';

let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr,
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T72:00:00',
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T96:00:00',
  },
  {
    id: createEventId(),
    title: 'Random event',
    start: '2022-11-05',
  },
];

export function createEventId() {
  return String(eventGuid++);
}
