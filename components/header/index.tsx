"use client"
import useMenuState, { useMenuStateProps } from "@/states/useMenuState";
import { HiMenuAlt1 } from "react-icons/hi";

const HeaderComponent = () => {
    const menuState = useMenuState((state: useMenuStateProps) => state);

    return (
        <header className="fixed z-[1] w-full h-[50px]  bg-white flex items-center justify-between">
            <div className="w-full h-[50px] flex items-center justify-start">
                <button onClick={() => menuState.setVisible()} className="text-[20px] text-sky-800 w-[50px] h-[50px] bg-transparent p-4"><HiMenuAlt1 /></button>
                <h2 className="font-bold text-sky-800 ml-2">Rentequip</h2>
            </div>
            <div>
            </div>
        </header>
    );
}

export default HeaderComponent;