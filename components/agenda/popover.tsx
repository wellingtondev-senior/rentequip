
import { Event } from '../../types/event';
import Button from "../ui/Button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';


interface PopoverComponentProps {
    evento: Event
}

export function PopoverComponent({ evento }: PopoverComponentProps) {
    return (
        <HoverCard>
            <HoverCardTrigger>
                <Button tooltip='evento'>{evento.title}</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 shadow-2xl">
                <div className="flex flex-col p-4">
                    <div className="flex items-center justify-start space-x-4">
                        <div className={`w-4 h-4  rounded-sm`} style={{ backgroundColor: evento.backgroundColor }}></div>
                        <h3>{evento.title}</h3>

                    </div>
                    <p>{evento.extendedProps.description}</p>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}
