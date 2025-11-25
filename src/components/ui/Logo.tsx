"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './Logo.module.css';
import { useSidebar } from '@/contexts/SideBarContext';

export default function Logo() {
    const { isOpen } = useSidebar();

    return (
        <Link href="/" className={`${styles.link} ${!isOpen ? styles.collapsed : ''}`}>
            <Image src="/icons/logo.svg" alt="Logo" width={56} height={56} className={styles.logo} />
            {isOpen && (
                <Image
                    src="/icons/logo-text.png"
                    alt="Needle Works Management"
                    width={96}
                    height={35}
                    className={styles['logo-text']}
                />
            )}
        </Link>
    );
}