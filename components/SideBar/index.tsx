"use client"
import { useState } from "react";
import { Menu } from "../ui/Menu";
import { RiMenu2Fill } from "react-icons/ri";
import useMenuState, { useMenuStateProps } from "@/states/useMenuState";
import useSubMenutate, { useSubMenutateProps } from "@/states/useSubMenuState";
import { MdSpaceDashboard, MdOutlineViewAgenda } from "react-icons/md";
import { useRouter } from "next/navigation";

const SideBar = () => {
    const router = useRouter();
    const menuState = useMenuState((state: useMenuStateProps) => state);
    const subMenuState = useSubMenutate((state: useSubMenutateProps) => state);

const setOpenMenu = ()=>{

}
    return (
        <Menu.Root open={menuState.visible}>
            <Menu.Action onOpenAtion={()=>menuState.setVisible()} menuActionIcon={RiMenu2Fill} />
            <Menu.ButtonTooltip label="Dashboard" onAction={()=>router.push("./")} buttonIcon={MdSpaceDashboard }/>
            <Menu.ButtonTooltip label="Agenda" onAction={()=>router.push("./")} buttonIcon={MdSpaceDashboard }/>
            <Menu.ButtonTooltip label="Agenda" onAction={()=>router.push("./")} buttonIcon={MdOutlineViewAgenda }/>
        </Menu.Root>
    );
}

export default SideBar;