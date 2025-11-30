"use client";
import React, { createContext, useContext, useState, useMemo } from "react";

export interface Appointment {
    id: string;
    type: "consultation" | "tattoo-session" | "flash";
    title: string;
    clientName: string;
    start: string;
    end: string;
}

interface UpcomingAppointmentsContextValue {
    date: Date;
    setDate: (d: Date) => void;
    appointments: Appointment[];
}

const UpcomingAppointmentsContext = createContext<UpcomingAppointmentsContextValue | undefined>(undefined);

const mockAppointments: Appointment[] = [
    {
        id: "a1",
        type: "consultation",
        title: "Consultation with Martin Torff",
        clientName: "Martin Torff",
        start: new Date(new Date().setHours(10, 0, 0, 0)).toISOString(),
        end: new Date(new Date().setHours(11, 0, 0, 0)).toISOString()
    },
    {
        id: "a2",
        type: "tattoo-session",
        title: "Tattoo Session with Haylie",
        clientName: "Haylie",
        start: new Date(new Date().setHours(14, 0, 0, 0)).toISOString(),
        end: new Date(new Date().setHours(16, 0, 0, 0)).toISOString()
    },
    {
        id: "a3",
        type: "flash",
        title: "Flash Session with Davis",
        clientName: "Davis",
        start: new Date(new Date().setHours(16, 30, 0, 0)).toISOString(),
        end: new Date(new Date().setHours(17, 30, 0, 0)).toISOString()
    },
    {
        id: "a4",
        type: "consultation",
        title: "Consultation with Sarah Chen",
        clientName: "Sarah Chen",
        start: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split(".")[0] + "Z",
        end: new Date(Date.now() + 24 * 60 * 60 * 1000 + 60 * 60 * 1000).toISOString().split(".")[0] + "Z"
    },
    {
        id: "a5",
        type: "tattoo-session",
        title: "Tattoo Session with Alex Rodriguez",
        clientName: "Alex Rodriguez",
        start: new Date(Date.now() + 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000).toISOString().split(".")[0] + "Z",
        end: new Date(Date.now() + 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000).toISOString().split(".")[0] + "Z"
    },
    {
        id: "a6",
        type: "flash",
        title: "Flash Session with Jamie Lee",
        clientName: "Jamie Lee",
        start: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split(".")[0] + "Z",
        end: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 60 * 60 * 1000).toISOString().split(".")[0] + "Z"
    },
];

export function UpcomingAppointmentsProvider({ children }: { children: React.ReactNode }) {
    const [date, setDate] = useState<Date>(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return today;
    });

    const appointments = useMemo(() => {
        return mockAppointments.filter(a => {
            const sameDay = new Date(a.start).toDateString() === date.toDateString();
            return sameDay;
        });
    }, [date]);

    return (
        <UpcomingAppointmentsContext.Provider value={{ date, setDate, appointments }}>
            {children}
        </UpcomingAppointmentsContext.Provider>
    );
}

export function useUpcomingAppointments() {
    const ctx = useContext(UpcomingAppointmentsContext);
    if (!ctx) throw new Error("useUpcomingAppointments must be used within UpcomingAppointmentsProvider");
    return ctx;
}
