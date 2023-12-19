import { ReactNode } from "react";
import { tv } from 'tailwind-variants'



const animateMenu = tv({
    base: "fixed z-[9] w-[50px]  flex flex-col gap-6 items-center justify-start top-0 bottom-0  bg-sky-800 transition-1 ease-in-out duration-700",
    variants: {
        open: {
            true: "left-0",
            false: "left-[-50px]"
        },
    },
    defaultVariants: {
        open: true
    }
});

interface MenuRootProps {
    children: ReactNode,
    open?: boolean
}


export const MenuRoot = ({ open = true, children, ...props }: MenuRootProps) => {
    return (
        <section className={animateMenu({ open })} {...props}>
            {children}
        </section>
    );
}

