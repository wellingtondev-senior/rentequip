import { create } from 'zustand';


export interface useSubMenutateProps {
    visible: boolean,
    setVisible: (items?: any, page?:number | null) => void,
    items?: any;
    page?:number | null;
}
const useSubMenutate = create<useSubMenutateProps>((set) => ({
    visible: false,
    items:{},
    page:null,
    setVisible: (items?, page?) => set((state) => (
        {
            visible: !!page == false ? false :state.page != page ? true : !state.visible,
            items: items,
            page:page
        }
    )
    ),

})
);

export default useSubMenutate;
