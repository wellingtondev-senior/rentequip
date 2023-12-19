import DashboardLayout from "@/components/layout/dashboardLayout";
import { ClienteTable } from "@/components/tables/cliente";
import { Card } from "@/components/ui/card";

const InicioPage = () => {
    return (
        <DashboardLayout>
           <article className="p-4 w-full">
            <h1 className="font-bold text-[40px] text-gray-800">Dashboard</h1>
            <Card className="p-4 w-full">
            </Card>
           </article>
        </DashboardLayout>
    );
}

export default InicioPage;