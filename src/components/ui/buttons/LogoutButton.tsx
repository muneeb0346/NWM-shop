"use client";

import LogoutIcon from "@/components/ui/icons/LogoutIcon";
import styles from "./LogoutButton.module.css";
import { useSidebar } from "@contexts/SideBarContext";

export default function LogoutButton() {
    const { isOpen } = useSidebar();

    return (
        <button
            className={styles.button}
            title={!isOpen ? "Logout" : ""}
        >
            <LogoutIcon />
            {isOpen && (
                <span className="text-18-500-130">Logout</span>
            )}
        </button>
    );
}