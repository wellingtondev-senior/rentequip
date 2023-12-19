"use client"
import useMenuState, { useMenuStateProps } from "@/states/useMenuState";
import useSubMenutate, { useSubMenutateProps } from "@/states/useSubMenuState";
import Link from "next/link";
import { FaCaretRight } from "react-icons/fa6";


const subMenuAnimation = {
    open: "fixed z-[2] left-[50px] top-0 bottom-0 w-[180px]  bg-sky-900 transition-1 ease-in-out duration-700",
    close: "fixed z-[2] left-[-230px] top-0 bottom-0 w-[180px]  bg-sky-900 transition-1 ease-in-out duration-700",
}




const SubMenu = ({ }) => {
    const menuState = useMenuState((state: useMenuStateProps) => state);
    const subMenuState = useSubMenutate((state: useSubMenutateProps) => state);
    return (
        <article className={subMenuState.visible && menuState.visible ? subMenuAnimation.open : subMenuAnimation.close}>
            <nav className="p-4">
                <ul className="w-full flex items-center justify-start">
                    <li className="font-bold text-[22px] text-sky-100 py-4">
                        {subMenuState.items?.title}
                    </li>
                </ul>
                <ul className="w-full flex-col items-center justify-start">
                    {
                        subMenuState.items?.data?.map((item: any, i:number) => (
                            <li key={i} >
                                <Link className=" flex items-center justify-start  space-x-2 mb-4 font-semibold text-[14px] text-sky-100" href={item.page}><FaCaretRight /> <span>{item.label}</span></Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </article>
    );
}

export default SubMenu;