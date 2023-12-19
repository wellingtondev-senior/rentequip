import { ElementType } from "react";
import { tv } from 'tailwind-variants'



const meneAction = tv({
    base: "p-4 text-[20px] text-white hover:text-green-400",
    variants: {
        
    },
    defaultVariants: {
      
    }
});

interface MenuActionProps  {
    menuActionIcon:ElementType
    onOpenAtion:()=>void
}


export const MenuAction = ({menuActionIcon:Icon, onOpenAtion}:MenuActionProps) => {
    return (
        <button onClick={onOpenAtion} className={meneAction({})}>
           <Icon/>
        </button>
    );
}

