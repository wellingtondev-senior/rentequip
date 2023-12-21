import DashboardLayout from "@/components/layout/dashboardLayout";
import { ClienteTable } from "@/components/tables/cliente";
import { Card } from "@/components/ui/card";
import { TabelaLocacao } from "./tabelaLocacao";

const InicioPage = () => {
    return (
        <DashboardLayout>
           <article className="p-4 w-full">
            <h1 className="font-bold text-[40px] text-gray-800">Historico de Locação</h1>
            <Card className="p-4 w-full">
                <TabelaLocacao/>
            </Card>
           </article>
        </DashboardLayout>
    );
}

export default InicioPage;