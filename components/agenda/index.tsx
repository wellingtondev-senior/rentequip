"use client"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import moment from 'moment';
import { PopoverComponent } from './popover';
import { Eventos } from '@/types/event';

const eventos:Eventos = {
    events: [
        {
            title: 'Reunião importante',
            start: '2023-12-01T10:00:00',
            end: '2023-12-03T12:00:00',
            groupId: 'grupo-1',
            backgroundColor: "#f39c12",
            borderColor: "transparent",
            extendedProps: {
                department: 'BioChemistry',
                description: 'Lecture',
                cliente: "Roberto Almeida",
            }, // Adicione a propriedade groupId
            // Adicione a propriedade groupId
        },
        {
            title: 'Evento do Grupo 2',
            start: '2023-12-04T14:00:00',
            end: '2023-12-06T16:00:00',
            groupId: 'grupo-2',
            backgroundColor: "#8e44ad",
            borderColor: "transparent",
            extendedProps: {
                department: 'BioChemistry',
                description: 'Lecture',
                cliente: "Roberto Almeida",
            }, // Adicione a propriedade groupId
        },


    ],
}

export default function AgendaComponent() {



    const getGroupColor = (groupId: any) => {
        const numerosMaioresQueCinco = eventos.events.filter((object) => object.groupId == groupId);
        return numerosMaioresQueCinco[0].backgroundColor
    };

    function renderEventContent(event: any, start: any, end: any, isSelected: any) {
        const isInWeekView = event.view.type === 'timeGridWeek';
        const isInDayView = event.view.type === 'timeGridDay';

        if (isInWeekView || isInDayView) {
            return <div className='flex flex-col items-center justify-center text-gray-800'>
                <p className=''>{event.timeText}</p> -
                <p className='font-semibold uppercase text-center'>{event.event.title}</p>
                <p className='font-normal'>{event.event.extendedProps.description}</p>
            </div>;
        } else {
             return (
                <PopoverComponent evento={event?.event}/>
             );
           
        }

    }

    const eventClassNames = (arg: any) => {
        const isInWeekView = arg.view.type === 'timeGridWeek';
        const isInDayView = arg.view.type === 'timeGridDay';
        if (isInWeekView || isInDayView) {
            const style: { [key: string]: string } = {
                backgroundColor: "transparent",
                padding: '5px',
                borderRadius: '10px', // Borda arredondada
                border: `5px solid ${getGroupColor(arg.event.groupId)}`, // Cor da borda e largura
                color: getGroupColor(arg.event.groupId), // Cor do texto
            };

            Object.keys(style).forEach((property: any) => {
                arg.el.style[property as any] = style[property];
            });
            //arg.el.style.borwidth = "10px"
        } else {

        }
        // Mantém a classe padrão ou vazia
    };


    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            locale="pt-br"
            events={eventos}
            eventContent={renderEventContent}
            eventDidMount={eventClassNames}
        />
    )
}

// a custom render function


