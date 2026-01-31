"use client";

import { useSidebar } from "@contexts/SideBarContext";
import styles from "./Sidebar.module.css"
import Logo from "@components/ui/Logo";
import LogoutButton from "@components/ui/buttons/LogoutButton";
import SideBarButton from "@components/ui/buttons/SideBarButtons";
import DashboardIcon from "@components/ui/icons/DashboardIcon";
import ClientsIcon from "@components/ui/icons/ClientsIcon";
import ChatIcon from "@components/ui/icons/ChatIcon";
import BookingsIcon from "@components/ui/icons/BookingsIcon";
import CalenderIcon from "@components/ui/icons/CalenderIcon";
import ShopIcon from "@components/ui/icons/ShopIcon";
import StaffIcon from "@components/ui/icons/StaffIcon";
import PaymentsIcon from "@components/ui/icons/PaymentsIcon";
import InventoryIcon from "@components/ui/icons/InventoryIcon";
import SettingsIcon from "@components/ui/icons/SettingsIcon";
import HelpIcon from "@components/ui/icons/HelpIcon";

export default function Sidebar() {
    const { isOpen, setIsOpen } = useSidebar();

    return (
        <div
            className={`overlay-background ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
        >
            <aside
                aria-label="Sidebar"
                className={`${styles.sidebar} ${isOpen ? styles.active : ""}`}
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(!isOpen);
                }}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <nav className={styles.nav} aria-label="Primary">
                    <Logo className={styles.logo} />
                    <div className={styles["gap-16px"]}></div>
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            <SideBarButton href="/dashboard" icon={DashboardIcon} text="Dashboard" />
                        </li>
                        <li className={styles.li}>
                            <SideBarButton href="/clients" icon={ClientsIcon} text="Clients" />
                        </li>
                        <li className={styles.li}>
                            <SideBarButton href="/chat" icon={ChatIcon} text="Chat" />
                        </li>
                        <li className={styles.li}>
                            <SideBarButton href="/bookings" icon={BookingsIcon} text="Bookings" />
                        </li>
                        <li className={styles.li}>
                            <SideBarButton href="/calendar" icon={CalenderIcon} text="Calendar" />
                        </li>
                        <li className={styles.li}>
                            <SideBarButton href="/shop" icon={ShopIcon} text="Shop" />
                        </li>
                        <li className={styles.li}>
                            <SideBarButton href="/staff" icon={StaffIcon} text="Staff" />
                        </li>
                        <li className={styles.li}>
                            <SideBarButton href="/payments" icon={PaymentsIcon} text="Payments" />
                        </li>
                        <li className={styles.li}>
                            <SideBarButton href="/inventory" icon={InventoryIcon} text="Inventory" />
                        </li>
                    </ul>
                    <div className="separator-1"></div>
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            <SideBarButton href="/settings" icon={SettingsIcon} text="Settings" />
                        </li>
                        <li className={styles.li}>
                            <SideBarButton href="/help" icon={HelpIcon} text="Help & Support" />
                        </li>
                    </ul>
                    <LogoutButton className={styles["margin-auto"]} />
                </nav>
            </aside>
        </div>
    );
}