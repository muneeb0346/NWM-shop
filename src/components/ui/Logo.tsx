"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.css";
import { useSidebar } from "@contexts/SideBarContext";

interface LogoProps {
    className?: string;
}

export default function Logo({ className }: LogoProps) {
    const { isOpen } = useSidebar();

    return (
        <Link href="/" className={`${styles.link} ${!isOpen ? styles.collapsed : ""} ${className ?? ""}`}>
            <Image src="/icons/logo.svg" alt="Logo" width={56} height={56} preload className={styles.logo} />
            {isOpen && (
                <Image
                    src="/icons/logo-text.svg"
                    alt="Needle Works Management"
                    width={96}
                    height={35}
                    preload
                    className={styles["logo-text"]}
                />
            )}
        </Link>
    );
}