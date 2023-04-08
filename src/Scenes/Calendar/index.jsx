import { useState} from 'react'
import FullCallendar, {formateDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import  interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import{
    Box,
    List,
    ListItem,
    ListItemText,
    Select,
    Typography,
    useTheme
} from '@mui/material';
import Header from '../../Components/Header';
import { tokens } from '../Theme';

const Calendar = ()  => {
    const Theme = useTheme();
    const color = tokens(Theme.palette.mode);
    const[currenteEvents, setCurrentEvents]= useState([ ])


 const handleDaleteClcik = ( selected) => {
    const title = prompt('Enter a new title for your event')
    const calendarApi = selected.view.calendar
    calendarApi.unselect();

    if(title) {
      
        calendarApi .addEven({

        if: `${selected.dateStr}-${title}`,
        title,
        start:selected.startStr,
        end: selected.endStr,
        allDay:selected.allDay


        })


    }
 } ;

 const handleEventClick =  ( selected) => { 

    if (
        window.confirm(
            `Are you sure you want delete the event  '${selected.event.title}'`
        )
    ) {

        selected.event.remove()
    }

 }




}

export default Calendar