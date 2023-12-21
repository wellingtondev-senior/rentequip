import Button from "@/components/ui/Button"
import { FaRegFilePdf } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { IoIosEye } from "react-icons/io";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const locacoes = [
    {
        identificado: "INV001",
        equipamento: "Maquina Agricola 1",
        cliente: "Edson Passos Ltda",
        locacao: "Credit Card",
        devolucao: "",
        valor: "2.000",
        statusLocacao: "normal"
    },
    {
        identificado: "INV002",
        equipamento: "Paid",
        cliente: "$250.00",
        locacao: "Credit Card",
        devolucao: "",
        valor: "",
        statusLocacao: ""
    },
    {
        identificado: "INV003",
        equipamento: "Paid",
        cliente: "$250.00",
        locacao: "Credit Card",
        devolucao: "",
        valor: "",
        statusLocacao: ""
    },
    {
        identificado: "INV003",
        equipamento: "Paid",
        cliente: "$250.00",
        locacao: "Credit Card",
        devolucao: "",
        valor: "",
        statusLocacao: ""
    },
    {
        identificado: "INV003",
        equipamento: "Paid",
        cliente: "$250.00",
        locacao: "Credit Card",
        devolucao: "",
        valor: "",
        statusLocacao: ""
    },
    {
        identificado: "INV003",
        equipamento: "Paid",
        cliente: "$250.00",
        locacao: "Credit Card",
        devolucao: "",
        valor: "",
        statusLocacao: ""
    },
    {
        identificado: "INV003",
        equipamento: "Paid",
        cliente: "$250.00",
        locacao: "Credit Card",
        devolucao: "",
        valor: "",
        statusLocacao: ""
    },
    {
        identificado: "INV003",
        equipamento: "Paid",
        cliente: "$250.00",
        locacao: "Credit Card",
        devolucao: "",
        valor: "",
        statusLocacao: ""
    },
    {
        identificado: "INV003",
        equipamento: "Paid",
        cliente: "$250.00",
        locacao: "Credit Card",
        devolucao: "",
        valor: "",
        statusLocacao: ""
    },
    {
        identificado: "INV003",
        equipamento: "Paid",
        cliente: "$250.00",
        locacao: "Credit Card",
        devolucao: "",
        valor: "",
        statusLocacao: ""
    },
    {
        identificado: "INV003",
        equipamento: "Paid",
        cliente: "$250.00",
        locacao: "Credit Card",
        devolucao: "",
        valor: "",
        statusLocacao: ""
    },
    {
        identificado: "INV003",
        equipamento: "Paid",
        cliente: "$250.00",
        locacao: "Credit Card",
        devolucao: "",
        valor: "",
        statusLocacao: ""
    },
    {
        identificado: "INV003",
        equipamento: "Paid",
        cliente: "$250.00",
        locacao: "Credit Card",
        devolucao: "",
        valor: "",
        statusLocacao: ""
    },
    {
        identificado: "INV003",
        equipamento: "Paid",
        cliente: "$250.00",
        locacao: "Credit Card",
        devolucao: "",
        valor: "",
        statusLocacao: ""
    },

]

export function TabelaLocacao() {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Identificador</TableHead>
                    <TableHead>Equipamento</TableHead>
                    <TableHead>Locação</TableHead>
                    <TableHead>Devolução</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-center">Valor</TableHead>
                    <TableHead className="text-center">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {locacoes.map((invoice) => (
                    <TableRow key={invoice.identificado} className="hover:font-medium">
                        <TableCell className="font-medium">{invoice.identificado}</TableCell>
                        <TableCell>{invoice.equipamento}</TableCell>
                        <TableCell>{invoice.locacao}</TableCell>
                        <TableCell>{invoice.devolucao}</TableCell>
                        <TableCell>{invoice.cliente}</TableCell>
                        <TableCell>{invoice.statusLocacao}</TableCell>
                        <TableCell className="text-center">{invoice.valor}</TableCell>
                        <TableCell className="text-center">
                            <div className=" flex items-center justify-center gap-2">
                                <Button background="sky" icon={FaRegFilePdf} />
                                <Button background="green" icon={IoIosEye} />
                                <Button background="red" icon={AiOutlineDelete} />
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={7}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
