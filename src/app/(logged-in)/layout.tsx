import Sidebar from "@components/dashboards/Sidebar";
import styles from "./layout.module.css";
import { SidebarProvider } from "@/contexts/SideBarContext";

export default function LoggedInLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <div className={styles.page}>
                <Sidebar />
                <main>
                    {children}
                </main>
            </div>
        </SidebarProvider>
    );
}