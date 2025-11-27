import React from "react";
import Sidebar from "@components/dashboards/Sidebar";
import LoggedInHeader from "@components/dashboards/LoggedInHeader";
import styles from "./layout.module.css";
import { SidebarProvider } from "@contexts/SideBarContext";
import { NotificationsProvider } from "@contexts/NotificationsContext";

export default function LoggedInLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <NotificationsProvider>
                <div className={styles.page}>
                    <Sidebar />
                    <div className={styles.content}>
                        <LoggedInHeader />
                        <main className={styles.main}>
                            {children}
                        </main>
                    </div>
                </div>
            </NotificationsProvider>
        </SidebarProvider>
    );
}