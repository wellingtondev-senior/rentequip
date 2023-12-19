import { ReactNode } from "react";
import HeaderComponent from "../header";
import SideBar from "../SideBar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <section className="w-full h-auto bg-slate-100">
            <HeaderComponent />
           <SideBar/>
            <article className="p-10">
                {children}
            </article>
        </section>

    );
}

export default DashboardLayout;