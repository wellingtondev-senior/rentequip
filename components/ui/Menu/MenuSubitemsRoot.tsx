import { ReactNode } from "react";
import { tv } from 'tailwind-variants'


interface MenuSubitemsRootProps {
    openSubItems?: boolean
    children: ReactNode
}


const animateSubMenu = tv({
    base: "fixed z-[2]  top-0 bottom-0 w-[180px]  bg-sky-900 transition-1 ease-in-out duration-700",
    variants: {
        openSubItems: {
            true: "left-[50px]",
            false: "left-[-230px]"
        }

    },
    defaultVariants: {
        openSubItems: true
    }
});




export const MenuSubitemsRoot = ({  openSubItems, children }: MenuSubitemsRootProps) => {

    return (
        <article className={animateSubMenu({ openSubItems })}>
            {children}
        </article>
    );
}

