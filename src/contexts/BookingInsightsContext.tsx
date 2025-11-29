"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface DataPoint {
    date: string;
    appointments: number;
}

interface MonthData {
    [key: string]: DataPoint[];
}

interface BookingInsightsContextType {
    mockData: MonthData;
    dateRangeLabel: string;
    currentData: DataPoint[];
    availableMonths: string[];
    minDate: Date;
    maxDate: Date;
    startDate: Date | null;
    endDate: Date | null;
    setSelectedRange: (startDate: string, endDate: string) => void;
}

const mockData: MonthData = {
    "December 2021": [
        { date: "Dec 01", appointments: 10 },
        { date: "Dec 02", appointments: 8 },
        { date: "Dec 03", appointments: 17 },
        { date: "Dec 04", appointments: 15 },
        { date: "Dec 05", appointments: 19 },
        { date: "Dec 06", appointments: 12 },
        { date: "Dec 07", appointments: 23 },
        { date: "Dec 08", appointments: 18 },
        { date: "Dec 09", appointments: 16 },
        { date: "Dec 10", appointments: 14 },
        { date: "Dec 11", appointments: 20 },
        { date: "Dec 12", appointments: 22 },
        { date: "Dec 13", appointments: 19 },
        { date: "Dec 14", appointments: 15 },
        { date: "Dec 15", appointments: 17 },
        { date: "Dec 16", appointments: 21 },
        { date: "Dec 17", appointments: 18 },
        { date: "Dec 18", appointments: 16 },
        { date: "Dec 19", appointments: 14 },
        { date: "Dec 20", appointments: 19 },
        { date: "Dec 21", appointments: 23 },
        { date: "Dec 22", appointments: 20 },
        { date: "Dec 23", appointments: 18 },
        { date: "Dec 24", appointments: 12 },
        { date: "Dec 25", appointments: 8 },
        { date: "Dec 26", appointments: 10 },
        { date: "Dec 27", appointments: 15 },
        { date: "Dec 28", appointments: 19 },
        { date: "Dec 29", appointments: 21 },
        { date: "Dec 30", appointments: 22 },
        { date: "Dec 31", appointments: 17 },
    ],
    "December 2023": [
        { date: "Dec 01", appointments: 10 },
        { date: "Dec 02", appointments: 8 },
        { date: "Dec 03", appointments: 17 },
        { date: "Dec 05", appointments: 19 },
        { date: "Dec 06", appointments: 12 },
        { date: "Dec 07", appointments: 23 },
        { date: "Dec 08", appointments: 18 },
        { date: "Dec 09", appointments: 16 },
        { date: "Dec 10", appointments: 14 },
        { date: "Dec 11", appointments: 20 },
        { date: "Dec 21", appointments: 23 },
        { date: "Dec 22", appointments: 20 },
        { date: "Dec 23", appointments: 18 },
        { date: "Dec 24", appointments: 12 },
        { date: "Dec 25", appointments: 8 },
        { date: "Dec 26", appointments: 10 },
        { date: "Dec 27", appointments: 15 },
    ],
    "November 2024": [
        { date: "Nov 01", appointments: 12 },
        { date: "Nov 02", appointments: 14 },
        { date: "Nov 03", appointments: 16 },
        { date: "Nov 04", appointments: 15 },
        { date: "Nov 05", appointments: 18 },
        { date: "Nov 06", appointments: 20 },
        { date: "Nov 07", appointments: 17 },
        { date: "Nov 08", appointments: 19 },
        { date: "Nov 09", appointments: 21 },
        { date: "Nov 10", appointments: 18 },
        { date: "Nov 11", appointments: 16 },
        { date: "Nov 12", appointments: 14 },
        { date: "Nov 13", appointments: 15 },
        { date: "Nov 14", appointments: 17 },
        { date: "Nov 15", appointments: 19 },
        { date: "Nov 16", appointments: 22 },
        { date: "Nov 17", appointments: 20 },
        { date: "Nov 18", appointments: 18 },
        { date: "Nov 19", appointments: 16 },
        { date: "Nov 20", appointments: 14 },
        { date: "Nov 21", appointments: 15 },
        { date: "Nov 22", appointments: 17 },
        { date: "Nov 23", appointments: 19 },
        { date: "Nov 24", appointments: 21 },
        { date: "Nov 25", appointments: 18 },
        { date: "Nov 26", appointments: 16 },
        { date: "Nov 27", appointments: 14 },
        { date: "Nov 28", appointments: 15 },
        { date: "Nov 29", appointments: 17 },
        { date: "Nov 30", appointments: 19 },
    ],
};

const BookingInsightsContext = createContext<BookingInsightsContextType | undefined>(undefined);

export function BookingInsightsProvider({ children }: { children: ReactNode }) {
    const availableMonths = Object.keys(mockData);
    const [dateRangeLabel, setDateRangeLabel] = useState(availableMonths[0]);

    const [initMonthName, initYearStr] = availableMonths[0].split(" ");
    const initMonthIndex = [
        "January","February","March","April","May","June","July","August","September","October","November","December"
    ].indexOf(initMonthName);
    const initYear = parseInt(initYearStr, 10);
    const initialStart = new Date(initYear, initMonthIndex, 1);
    const initialEnd = new Date(initYear, initMonthIndex + 1, 0);

    const [startDate, setStartDate] = useState<Date | null>(initialStart);
    const [endDate, setEndDate] = useState<Date | null>(initialEnd);

    function generateRangeData(start: Date, end: Date, data: MonthData): DataPoint[] {
        const result: DataPoint[] = [];
        const current = new Date(start);
        while (current <= end) {
            const monthName = current.toLocaleString("default", { month: "long" });
            const year = current.getFullYear();
            const monthKey = `${monthName} ${year}`;
            const day = current.getDate();
            const monthData = data[monthKey];
            let appointments = 0;
            if (monthData) {
                const dayData = monthData.find(d => {
                    const m = d.date.match(/(\d+)/);
                    return m && parseInt(m[1], 10) === day;
                });
                appointments = dayData?.appointments || 0;
            }
            const monthAbbr = monthName.substring(0, 3);
            result.push({
                date: `${monthAbbr} ${String(day).padStart(2, "0")}`,
                appointments,
            });
            current.setDate(current.getDate() + 1);
        }
        return result;
    }

    const currentData = startDate && endDate ? generateRangeData(startDate, endDate, mockData) : [];

    const minDate = (() => {
        const firstMonth = availableMonths[0];
        const [monthName, yearStr] = firstMonth.split(" ");
        const monthIndex = [
            "January","February","March","April","May","June","July","August","September","October","November","December"
        ].indexOf(monthName);
        return new Date(parseInt(yearStr, 10), monthIndex, 1);
    })();

    const maxDate = new Date();

    const setSelectedRange = (startDateStr: string, endDateStr: string) => {
        const start = new Date(startDateStr.split("/").reverse().join("-"));
        const end = new Date(endDateStr.split("/").reverse().join("-"));
        setStartDate(start);
        setEndDate(end);
        const isFullYear = (
            start.getFullYear() === end.getFullYear() &&
            start.getMonth() === 0 && start.getDate() === 1 &&
            end.getMonth() === 11 && end.getDate() === 31
        );
        const isWholeYearSpan = (
            start.getMonth() === 0 && start.getDate() === 1 &&
            end.getMonth() === 11 && end.getDate() === 31 &&
            end.getFullYear() > start.getFullYear()
        );
        const isFullMonth = (
            start.getDate() === 1 &&
            end.getDate() === new Date(end.getFullYear(), end.getMonth() + 1, 0).getDate() &&
            start.getMonth() === end.getMonth() &&
            start.getFullYear() === end.getFullYear()
        );
        if (isFullYear) {
            setDateRangeLabel(`${start.getFullYear()}`);
        } else if (isWholeYearSpan) {
            setDateRangeLabel(`${start.getFullYear()} - ${end.getFullYear()}`);
        } else if (isFullMonth) {
            const monthName = start.toLocaleString("default", { month: "long" });
            setDateRangeLabel(`${monthName} ${start.getFullYear()}`);
        } else {
            const dd1 = String(start.getDate()).padStart(2, "0");
            const mm1 = String(start.getMonth() + 1).padStart(2, "0");
            const yy1 = String(start.getFullYear()).slice(-2);
            const dd2 = String(end.getDate()).padStart(2, "0");
            const mm2 = String(end.getMonth() + 1).padStart(2, "0");
            const yy2 = String(end.getFullYear()).slice(-2);
            setDateRangeLabel(`${dd1}/${mm1}/${yy1} - ${dd2}/${mm2}/${yy2}`);
        }
    };

    return (
        <BookingInsightsContext.Provider
            value={{
                mockData,
                startDate,
                endDate,
                dateRangeLabel,
                currentData,
                availableMonths,
                minDate,
                maxDate,
                setSelectedRange,
            }}
        >
            {children}
        </BookingInsightsContext.Provider>
    );
}

export function useBookingInsights() {
    const context = useContext(BookingInsightsContext);
    if (!context) {
        throw new Error("useBookingInsights must be used within BookingInsightsProvider");
    }
    return context;
}
