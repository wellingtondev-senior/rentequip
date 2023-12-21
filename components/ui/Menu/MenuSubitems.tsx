import Link from "next/link";
import { ElementType } from "react";
import { VariantProps, tv } from "tailwind-variants";
import { IconButton } from "../IconButton";

interface MenuSubitemsTituloProps extends VariantProps<typeof item> {
    label: string,
    page: string,
    icon: ElementType
    iconSize?: "sm" | "md" | "lg"
}

const item = tv({
    base: "font-semibold  text-[15px] flex items-center justify-start py-2 gap-4 px-4",
    variants: {
        color: {
            sky: "text-sky-200",
            orange: "text-orange-300"
        },

    },
    defaultVariants: {
        color: "sky",
    }

});




export const MenuSubitems = ({ iconSize, color, label, page, icon }: MenuSubitemsTituloProps) => {
    return (
        <Link href={page} className={item({ color })}>
            <IconButton iconSize={iconSize} icon={icon} />
            <span>{label}</span>
        </Link>
    );
}

