"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./DateRangePickerModal.module.css";
import DateIcon from "@components/ui/icons/DateIcon";
import Dropdown from "@components/ui/dropdowns/Dropdown";

interface SingleDatePickerModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (date: string) => void;
    initialDate?: string;
    futureYears?: number;
}

export default function SingleDatePickerModal({
    isOpen,
    onClose,
    onSelect,
    initialDate = "",
    futureYears = 2,
}: SingleDatePickerModalProps) {
    const parseDateString = (str: string): Date | null => {
        const parts = str.split("/");
        if (parts.length !== 3) return null;
        const [dd, mm, yyyy] = parts.map((p) => parseInt(p, 10));
        if (!dd || !mm || !yyyy) return null;
        return new Date(yyyy, mm - 1, dd);
    };
    const formatInputDate = (date: Date): string => {
        const dd = String(date.getDate()).padStart(2, "0");
        const mm = String(date.getMonth() + 1).padStart(2, "0");
        const yyyy = date.getFullYear();
        return `${dd}/${mm}/${yyyy}`;
    };

    const initDate = initialDate ? parseDateString(initialDate) : null;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [currentMonth, setCurrentMonth] = useState(
        initDate ? initDate.getMonth() : today.getMonth()
    );
    const [currentYear, setCurrentYear] = useState(
        initDate ? initDate.getFullYear() : today.getFullYear()
    );
    const [selectedDateObj, setSelectedDateObj] = useState<Date | null>(initDate);
    const [dateInput, setDateInput] = useState(initDate ? formatInputDate(initDate) : "");
    const [focusedDate, setFocusedDate] = useState<Date | null>(null);
    const calendarRef = useRef<HTMLDivElement>(null);

    const minDate = today;
    const maxDate = new Date(today.getFullYear() + futureYears, 11, 31);

    const parseAndClamp = (str: string): Date | null => {
        const parts = str.split("/");
        if (parts.length !== 3) return null;
        const [ddRaw, mmRaw, yyyyRaw] = parts;
        if (!/^\d+$/.test(ddRaw) || !/^\d+$/.test(mmRaw) || !/^\d+$/.test(yyyyRaw)) return null;
        const dd = parseInt(ddRaw, 10);
        const mm = parseInt(mmRaw, 10);
        const yyyy = parseInt(yyyyRaw, 10);
        if (yyyy < 1000 || mm < 1 || mm > 12 || dd < 1 || dd > 31) {
            if (yyyy > maxDate.getFullYear()) return maxDate;
            if (yyyy < minDate.getFullYear()) return minDate;
            return null;
        }
        const candidate = new Date(yyyy, mm - 1, dd);
        if (candidate.getFullYear() !== yyyy || candidate.getMonth() !== mm - 1 || candidate.getDate() !== dd) {
            const temp = new Date(yyyy, mm - 1, 1);
            if (temp.getTime() > maxDate.getTime()) return maxDate;
            if (temp.getTime() < minDate.getTime()) return minDate;
            return null;
        }
        if (candidate.getTime() > maxDate.getTime()) return maxDate;
        if (candidate.getTime() < minDate.getTime()) return minDate;
        return candidate;
    };

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    const handleMonthChange = (value: string) => {
        const monthIndex = monthNames.indexOf(value);
        if (monthIndex !== -1) {
            setCurrentMonth(monthIndex);
        }
    };

    const handleYearChange = (value: string) => {
        setCurrentYear(parseInt(value));
    };

    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const minYearAvailable = minDate.getFullYear();
    const maxYearAvailable = maxDate.getFullYear();
    const yearOptions = Array.from(
        { length: maxYearAvailable - minYearAvailable + 1 },
        (_, i) => String(minYearAvailable + i)
    );

    const activateDate = (date: Date) => {
        setSelectedDateObj(date);
        setDateInput(formatInputDate(date));
        setFocusedDate(date);
        setCurrentMonth(date.getMonth());
        setCurrentYear(date.getFullYear());
    };

    const isSelected = (day: number) => {
        if (!selectedDateObj) return false;
        return selectedDateObj.getFullYear() === currentYear && selectedDateObj.getMonth() === currentMonth && selectedDateObj.getDate() === day;
    };

    const isPastDate = (day: number) => {
        const checkDate = new Date(currentYear, currentMonth, day);
        return checkDate.getTime() < minDate.getTime();
    };

    const handleSelectDate = () => {
        if (selectedDateObj) {
            const formatted = formatInputDate(selectedDateObj);
            onSelect(formatted);
            onClose();
        }
    };

    const changeMonthIfNeeded = (d: Date) => {
        const m = d.getMonth();
        const y = d.getFullYear();
        if (m !== currentMonth || y !== currentYear) {
            setCurrentMonth(m);
            setCurrentYear(y);
        }
    };

    const moveFocusByDays = (delta: number) => {
        const base = focusedDate || selectedDateObj || minDate;
        const next = new Date(base.getFullYear(), base.getMonth(), base.getDate() + delta);
        if (next.getTime() >= minDate.getTime() && next.getTime() <= maxDate.getTime()) {
            setFocusedDate(next);
            changeMonthIfNeeded(next);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        switch (e.key) {
            case "ArrowLeft":
                e.preventDefault();
                moveFocusByDays(-1);
                break;
            case "ArrowRight":
                e.preventDefault();
                moveFocusByDays(1);
                break;
            case "ArrowUp":
                e.preventDefault();
                moveFocusByDays(-7);
                break;
            case "ArrowDown":
                e.preventDefault();
                moveFocusByDays(7);
                break;
            case "PageUp":
                e.preventDefault();
                handlePrevMonth();
                break;
            case "PageDown":
                e.preventDefault();
                handleNextMonth();
                break;
            case "Home":
                e.preventDefault();
                setFocusedDate(new Date(currentYear, currentMonth, 1));
                break;
            case "End":
                e.preventDefault();
                setFocusedDate(new Date(currentYear, currentMonth, daysInMonth));
                break;
            case "Enter":
            case " ":
                e.preventDefault();
                if (focusedDate) {
                    if (focusedDate.getMonth() === currentMonth && focusedDate.getFullYear() === currentYear && !isPastDate(focusedDate.getDate())) {
                        activateDate(focusedDate);
                    }
                }
                break;
            case "Escape":
                e.preventDefault();
                onClose();
                break;
        }
    };

    useEffect(() => {
        if (!calendarRef.current || !focusedDate) return;
        const selector = `[data-date="${focusedDate.getFullYear()}-${focusedDate.getMonth()}-${focusedDate.getDate()}"]`;
        const el = calendarRef.current.querySelector<HTMLButtonElement>(selector);
        if (el) el.focus();
    }, [focusedDate, currentMonth, currentYear]);

    const onDateInputBlur = () => {
        const parsed = parseAndClamp(dateInput);
        if (!parsed) return;
        setSelectedDateObj(parsed);
        setFocusedDate(parsed);
        setCurrentMonth(parsed.getMonth());
        setCurrentYear(parsed.getFullYear());
        setDateInput(formatInputDate(parsed));
    };

    const renderCalendar = () => {
        const days = [];
        const totalCells = Math.ceil((firstDayOfMonth + daysInMonth) / 7) * 7;

        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className={styles.date}></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const selected = isSelected(day);
            const isPast = isPastDate(day);
            let extraClass = "";
            if (selected) extraClass = styles.dateStart;
            else if (isPast) extraClass = styles.datePast;
            const thisDateObj = new Date(currentYear, currentMonth, day);
            const isFocused = focusedDate && thisDateObj.getTime() === focusedDate.getTime();
            days.push(
                <button
                    key={day}
                    type="button"
                    className={`${styles.date} ${extraClass}`}
                    data-date={`${currentYear}-${currentMonth}-${day}`}
                    tabIndex={isFocused ? 0 : -1}
                    role="gridcell"
                    aria-selected={selected}
                    aria-label={`${day} ${selected ? "selected" : ""}`.trim()}
                    onClick={() => !isPast && activateDate(thisDateObj)}
                    onFocus={() => setFocusedDate(thisDateObj)}
                    disabled={isPast}
                >
                    {day}
                </button>
            );
        }

        const remainingCells = totalCells - days.length;
        for (let i = 1; i <= remainingCells; i++) {
            days.push(
                <div key={`next-${i}`} className={`${styles.date} ${styles.otherMonth}`}>
                    {i}
                </div>
            );
        }

        return days;
    };

    if (!isOpen) return null;

    return (
        <>
            <div className={styles.overlay} onClick={onClose}></div>
            <div className={styles.modal}>
                <div className={styles.month}>
                    <button
                        type="button"
                        className={styles.navButton}
                        onClick={handlePrevMonth}
                        aria-label="Previous month"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="9.75" fill="var(--bg-primary-normal)" />
                            <path
                                d="M13.5 8.5L10 12L13.5 15.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <div className={styles.monthYearContainer}>
                        <Dropdown
                            options={monthNames}
                            value={monthNames[currentMonth]}
                            onChange={handleMonthChange}
                            className={styles.monthDropdown}
                        />
                        <Dropdown
                            options={yearOptions}
                            value={String(currentYear)}
                            onChange={handleYearChange}
                            className={styles.yearDropdown}
                        />
                    </div>
                    <button
                        type="button"
                        className={styles.navButton}
                        onClick={handleNextMonth}
                        aria-label="Next month"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="9.75" fill="var(--bg-primary-normal)" />
                            <path
                                d="M10.5 8.5L14 12L10.5 15.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>

                <div className={styles.daySection}>
                    <div className={styles.dayHeader}>
                        <div className={styles.dayName}>Sun</div>
                        <div className={styles.dayName}>Mon</div>
                        <div className={styles.dayName}>Tue</div>
                        <div className={styles.dayName}>Wed</div>
                        <div className={styles.dayName}>Thu</div>
                        <div className={styles.dayName}>Fri</div>
                        <div className={styles.dayName}>Sat</div>
                    </div>

                    <div
                        className={styles.calendar}
                        role="grid"
                        onKeyDown={handleKeyDown}
                        ref={calendarRef}
                    >
                        {renderCalendar()}
                    </div>
                </div>

                <div className={`${styles.form} ${styles.formSingle}`}>
                    <div className={styles.inputField}>
                        <label className={styles.label}>Date</label>
                        <div className={styles.inputArea}>
                            <DateIcon width={20} height={20} />
                            <input
                                type="text"
                                value={dateInput}
                                onChange={(e) => setDateInput(e.target.value)}
                                onBlur={onDateInputBlur}
                                placeholder="DD/MM/YYYY"
                                className={styles.input}
                            />
                        </div>
                    </div>
                </div>

                <button
                    type="button"
                    className={styles.selectButton}
                    onClick={handleSelectDate}
                >
                    Select Date
                </button>
            </div>
        </>
    );
}
