"use client"
import { useState } from "react";
import { Menu, } from "../ui/Menu";
import { RiMenu2Fill } from "react-icons/ri";
import useMenuState, { useMenuStateProps } from "@/store/useMenuState";
import useSubMenutate, { useSubMenutateProps } from "@/store/useSubMenuState";
import { MdSpaceDashboard, MdOutlineViewAgenda } from "react-icons/md";
import { useRouter } from "next/navigation";
import { IoIosArrowDropleft } from "react-icons/io";
import { SubMenu, subMenuData } from "@/lib/menuItems";
import { FaUsers } from "react-icons/fa";
import { CiBoxes } from "react-icons/ci";
import { FaPeopleCarryBox } from "react-icons/fa6";

const SideBar = () => {
    const router = useRouter();
    const menuState = useMenuState((state: useMenuStateProps) => state);
    const subMenuState = useSubMenutate((state: useSubMenutateProps) => state);
    const [items, setItems] = useState<string>("")

    const [menuItems, setMenuItems] = useState<SubMenu[]>([])

    const actionMenu = () => {
        menuState.setVisible()
        if (subMenuState.visible) {
            subMenuState.setVisible()
        }
    }

    const setOpenSubItems = (item: string) => {
        console.log(item, items, subMenuState.visible)
        if (items == "") {
            subMenuState.setVisible();
            setItems(item.toLowerCase());
        } else if (items == item.toLowerCase()) {
            subMenuState.setVisible();
            setItems(item.toLowerCase());
        } else {
            setItems(item.toLowerCase());
        }
        setMenuItems(subMenuData(item.toLowerCase())?.data ?? [])
    }
    return (
        <>
            <Menu.Root open={menuState.visible}>
                <Menu.Action onOpenAtion={() => actionMenu()} menuActionIcon={RiMenu2Fill} />
                <Menu.ButtonTooltip label="Dashboard" onAction={() => router.push("./")} buttonIcon={MdSpaceDashboard} />
                <Menu.ButtonTooltip label="Agenda" onAction={() => setOpenSubItems("Agenda")} buttonIcon={MdOutlineViewAgenda} />
                <Menu.ButtonTooltip label="Clientes" onAction={() => setOpenSubItems("Clientes")} buttonIcon={FaUsers} />
                <Menu.ButtonTooltip label="Estoque" onAction={() => setOpenSubItems("Estoque")} buttonIcon={CiBoxes} />
                <Menu.ButtonTooltip label="Equipamentos" onAction={() => setOpenSubItems("Equipamentos")} buttonIcon={FaPeopleCarryBox } />
                <Menu.ButtonTooltip label="Contratos" onAction={() => setOpenSubItems("Clientes")} buttonIcon={FaUsers} />

            </Menu.Root>
            <Menu.SubitemsRoot openSubItems={subMenuState.visible}>
                <Menu.SubitemsTitulo label={items.toUpperCase()} color="sky" />
                {
                    menuItems.map((e, i) => (
                        <div key={i}>
                            <Menu.Subitems label={e.label} icon={IoIosArrowDropleft} page={e.page} />
                        </div>))
                }
            </Menu.SubitemsRoot>
        </>
    );
}

export default SideBar;