import FullCalendar, {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  formatDate,
} from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Header } from 'components/Header';
import { INITIAL_EVENTS, createEventId } from 'utils/event-utils';
import { useState } from 'react';
import { useTheme } from '@mui/material';
import { tokens } from 'assets/theme/theme';

export const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [weekendsVisible, setWeekendsVisible] = useState<boolean>(true);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    let title = prompt('Please enter a new title for your event');
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible);
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  // function renderEventContent(eventContent: EventContentArg) {
  //   return (
  //     <>
  //       <b>{eventContent.timeText}</b>
  //       <i>{eventContent.event.title}</i>
  //     </>
  //   );
  // }

  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Full Interactive Calendar" />
      <Box display="flex" justifyContent="space-between" m="20px 0 0 0">
        <Box
          flex="1 1 20%"
          sx={{ backgroundColor: colors.primary[400] }}
          p="15px"
          borderRadius="4px"
        >
          <Box>
            <label>
              <input
                type="checkbox"
                checked={weekendsVisible}
                onChange={handleWeekendsToggle}
              ></input>
              Toggle Weekends
            </label>
            <Typography sx={{ marginTop: '10px' }} variant="h5">
              Events
            </Typography>
            <List>
              {currentEvents.map((event: EventApi) => (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    margin: '10px 0',
                    borderRadius: '2px',
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {formatDate(event.start!, {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={weekendsVisible}
            initialEvents={INITIAL_EVENTS}
            select={handleDateSelect}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            // eventContent={renderEventContent}
            // custom render function
            // eventClick={handleEventClick}
            // eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          />
        </Box>
      </Box>
    </Box>
  );
};
