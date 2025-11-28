"use client";

import { useRef } from "react";
import styles from "./Dropdown.module.css";
import ChevronDownIcon from "@components/ui/icons/ChevronDownIcon";

interface DropdownProps {
    options: string[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

export default function Dropdown({ options, value, onChange, className }: DropdownProps) {
    const selectRef = useRef<HTMLSelectElement>(null);

    return (
        <div className={`${styles.wrapper} ${className || ""}`}>
            <select
                ref={selectRef}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`text-12-600-120 ${styles.select}`}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <ChevronDownIcon
                width={16}
                height={16}
                className={styles.chevron}
            />
        </div>
    );
}
