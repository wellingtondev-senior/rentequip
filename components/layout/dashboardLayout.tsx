import { ReactNode } from "react";
import HeaderComponent from "../header";
import SideBar from "../SideBar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <section className="w-full min-h-screen bg-slate-100">
            <HeaderComponent />
           <SideBar/>
            <article className="max-sm:p-2 p-10">
                {children}
            </article>
        </section>

    );
}

export default DashboardLayout;