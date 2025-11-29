"use client";

import { useState } from "react";
import styles from "./DateRangeButton.module.css";
import DateRangePickerModal from "@modals/DateRangePickerModal";
import ChevronDownIcon from "@components/ui/icons/ChevronDownIcon";

interface DateRangeButtonProps {
	placeholder?: string;
	value?: string;
	onChange?: (startDate: string, endDate: string) => void;
	className?: string;
	initialStartDate?: string;
	initialEndDate?: string;
	minDate?: Date;
	maxDate?: Date;
}

export default function DateRangeButton({
	placeholder = "December 2024",
	value,
	onChange,
	className,
	initialStartDate,
	initialEndDate,
	minDate,
	maxDate,
}: DateRangeButtonProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedRange, setSelectedRange] = useState(value || "");

	const monthNames = [
		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	];
	const parse = (str: string): Date | null => {
		const [dd, mm, yyyy] = str.split("/").map(Number);
		if (!dd || !mm || !yyyy) return null;
		return new Date(yyyy, mm - 1, dd);
	};
	const short = (d: Date): string => {
		const dd = String(d.getDate()).padStart(2, "0");
		const mm = String(d.getMonth() + 1).padStart(2, "0");
		const yy = String(d.getFullYear()).slice(-2);
		return `${dd}/${mm}/${yy}`;
	};
	const isFullMonth = (start: Date, end: Date): boolean => {
		return start.getFullYear() === end.getFullYear() &&
			start.getMonth() === end.getMonth() &&
			start.getDate() === 1 &&
			end.getDate() === new Date(end.getFullYear(), end.getMonth() + 1, 0).getDate();
	};
	const isFullYear = (start: Date, end: Date): boolean => {
		return start.getFullYear() === end.getFullYear() &&
			start.getMonth() === 0 && start.getDate() === 1 &&
			end.getMonth() === 11 && end.getDate() === 31;
	};
	const isWholeYearSpan = (start: Date, end: Date): boolean => {
		return start.getMonth() === 0 && start.getDate() === 1 &&
			end.getMonth() === 11 && end.getDate() === 31 &&
			end.getFullYear() > start.getFullYear();
	};
	const handleSelect = (startDate: string, endDate: string) => {
		const s = parse(startDate);
		const e = parse(endDate);
		let display = `${startDate} - ${endDate}`;
		if (s && e) {
			if (isFullYear(s, e)) {
				display = `${s.getFullYear()}`;
			} else if (isWholeYearSpan(s, e)) {
				display = `${s.getFullYear()} - ${e.getFullYear()}`;
			} else if (isFullMonth(s, e)) {
				display = `${monthNames[s.getMonth()]} ${s.getFullYear()}`;
			} else {
				display = `${short(s)} - ${short(e)}`;
			}
		}
		setSelectedRange(display);
		if (onChange) onChange(startDate, endDate);
	};

	return (
		<>
			<div className={`${styles.wrapper} ${className || ""}`}>
				<button
					type="button"
					className={`text-12-600-120 ${styles.button}`}
					onClick={() => setIsModalOpen(true)}
				>
					<span className={styles.text}>
						{selectedRange || placeholder}
					</span>
				</button>
				<ChevronDownIcon
					width={16}
					height={16}
					className={styles.chevron}
				/>
			</div>

			<DateRangePickerModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onSelect={handleSelect}
				initialStartDate={initialStartDate}
				initialEndDate={initialEndDate}
				minDate={minDate}
				maxDate={maxDate}
			/>
		</>
	);
}
