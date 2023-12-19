import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Eventos } from "@/types/event"
import { Event } from '../../types/event';


interface PopoverComponentProps {
    evento: Event
}

export function PopoverComponent({ evento }: PopoverComponentProps) {
    return (
        <Popover>
            <PopoverContent align="center" className="w-80 shadow-2xl">
                <div className="flex flex-col p-4">
                    <div className="flex items-center justify-start space-x-4">
                        <div className={`w-4 h-4  rounded-sm`} style={{backgroundColor:evento.backgroundColor}}></div>
                        <h3>{evento.title}</h3>
                        
                    </div>
                    <p>{evento.extendedProps.description}</p>
                </div>
            </PopoverContent>
            <PopoverTrigger asChild>
                <Button className="w-full h-[20px] hover:bg-transparent" variant="ghost">{evento.title}</Button>
            </PopoverTrigger>

        </Popover>
    )
}
