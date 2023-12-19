import AgendaComponent from "@/components/agenda";
import DashboardLayout from "@/components/layout/dashboardLayout";
import { Card } from "@/components/ui/card";
import { ScrollArea } from '@/components/ui/scroll-area';

const AgendaPage = () => {
    return (
        <DashboardLayout>
            <ScrollArea className="p-10 w-full fixed">
                <h1 className="font-bold text-[40px] text-gray-800">Agenda</h1>
                <Card className="p-4 w-full">
                    <AgendaComponent />
                </Card>
            </ScrollArea>
        </DashboardLayout>
    );
}

export default AgendaPage;