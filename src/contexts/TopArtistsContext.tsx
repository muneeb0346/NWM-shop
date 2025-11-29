"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ArtistData {
    name: string;
    appointments: number;
    [key: string]: string | number;
}

interface MonthData {
    [key: string]: ArtistData[];
}

interface TopArtistsContextType {
    mockData: MonthData;
    dateRangeLabel: string;
    chartData: ArtistData[];
    availableMonths: string[];
    minDate: Date;
    maxDate: Date;
    startDate: Date | null;
    endDate: Date | null;
    setSelectedRange: (startDate: string, endDate: string) => void;
}

const mockData: MonthData = {
    "December 2021": [
        { name: "Clara Jensen", appointments: 35 },
        { name: "Sophie Langley", appointments: 50 },
        { name: "Luca Moretti", appointments: 30 },
        { name: "Ayra Voss", appointments: 38 }
    ],
    "December 2023": [
        { name: "Clara Jensen", appointments: 35 },
        { name: "Sophie Langley", appointments: 50 },
        { name: "Ethan", appointments: 25 },
        { name: "Luca Moretti", appointments: 30 },
        { name: "Ayra Voss", appointments: 38 },
        { name: "Ayra Ethan", appointments: 20 },
        { name: "Sophie Voss", appointments: 39 }
    ],
    "November 2024": [
        { name: "Clara Jensen", appointments: 28 },
        { name: "Sophie Langley", appointments: 42 },
        { name: "Ethan", appointments: 32 },
        { name: "Luca Moretti", appointments: 25 },
        { name: "Ayra Voss", appointments: 35 }
    ],
    "December 2024": [
        { name: "Clara Jensen", appointments: 40 },
        { name: "Sophie Langley", appointments: 44 },
        { name: "Ethan", appointments: 31 },
        { name: "Luca Moretti", appointments: 27 },
        { name: "Ayra Voss", appointments: 36 }
    ]
};

const TopArtistsContext = createContext<TopArtistsContextType | undefined>(undefined);

export function TopArtistsProvider({ children }: { children: ReactNode }) {
    const availableMonths = Object.keys(mockData);
    const [dateRangeLabel, setDateRangeLabel] = useState(availableMonths[availableMonths.length - 1]);
    
    const [initMonthName, initYearStr] = availableMonths[availableMonths.length - 1].split(" ");
    const initMonthIndex = [
        "January","February","March","April","May","June","July","August","September","October","November","December"
    ].indexOf(initMonthName);
    const initYear = parseInt(initYearStr, 10);
    const initialStart = new Date(initYear, initMonthIndex, 1);
    const initialEnd = new Date(initYear, initMonthIndex + 1, 0);
    const [startDate, setStartDate] = useState<Date | null>(initialStart);
    const [endDate, setEndDate] = useState<Date | null>(initialEnd);
    
    function aggregateArtists(start: Date, end: Date): ArtistData[] {
        const totals = new Map<string, number>();
        const cursor = new Date(start);
        while (cursor <= end) {
            const monthName = cursor.toLocaleString("default", { month: "long" });
            const year = cursor.getFullYear();
            const monthKey = `${monthName} ${year}`;
            const monthArr = mockData[monthKey] ?? [];
            monthArr.forEach(a => {
                const prev = totals.get(a.name) || 0;
                totals.set(a.name, prev + (typeof a.appointments === "number" ? a.appointments : 0));
            });
            cursor.setMonth(cursor.getMonth() + 1);
            cursor.setDate(1);
        }
        return Array.from(totals.entries()).map(([name, appointments]) => ({ name, appointments }));
    }
    const chartData = startDate && endDate ? aggregateArtists(startDate, endDate) : [];

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
        <TopArtistsContext.Provider
            value={{
                mockData,
                startDate,
                endDate,
                dateRangeLabel,
                chartData,
                availableMonths,
                minDate,
                maxDate,
                setSelectedRange,
            }}
        >
            {children}
        </TopArtistsContext.Provider>
    );
}

export function useTopArtists() {
    const context = useContext(TopArtistsContext);
    if (!context) {
        throw new Error("useTopArtists must be used within TopArtistsProvider");
    }
    return context;
}
