import React from "react";
import Sidebar from "@components/dashboards/Sidebar";
import LoggedInHeader from "@components/dashboards/LoggedInHeader";
import styles from "./layout.module.css";
import { SidebarProvider } from "@contexts/SideBarContext";

export default function LoggedInLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={styles.page}>
            <SidebarProvider>
                <Sidebar />
            </SidebarProvider>
            <div className={styles.content}>
                <LoggedInHeader />
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </div>
    );
}