"use client";

import LogoutIcon from "@/components/ui/icons/LogoutIcon";
import styles from "./LogoutButton.module.css";
import { useSidebar } from "@contexts/SideBarContext";

interface LogoutButtonProps {
    className?: string;
}

export default function LogoutButton({ className }: LogoutButtonProps) {
    const { isOpen } = useSidebar();

    return (
        <button
            className={`${styles.button} ${className}`}
            title={!isOpen ? "Logout" : ""}
        >
            <LogoutIcon className={styles.icon} />
            {isOpen && (
                <span className="text-18-500-130">Logout</span>
            )}
        </button>
    );
}