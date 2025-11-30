"use client";
import React, { createContext, useContext, useMemo } from "react";

export type BookingStatus = "new" | "deposit-requested" | "deposit-paid" | "scheduled" | "upcoming";

export interface Booking {
    artistName: string;
    artistAvatar: string;
    clientName: string;
    bookingType: string;
    style: string;
    date: string;
    time: string;
    status: BookingStatus;
    statusText: string;
}

interface NewBookingsContextValue {
    bookings: Booking[];
}

const NewBookingsContext = createContext<NewBookingsContextValue | undefined>(undefined);

const mockBookings: Booking[] = [
    { artistName: "Ayra Voss", artistAvatar: "/icons/artist-dp-1.png", clientName: "Martin Torff", bookingType: "💬 Consultation", style: "realism", date: "📅 Tue, Aug 20, 2025", time: "⏰ 11:00 AM – 1:00 PM", status: "new", statusText: "New" },
    { artistName: "Luca Moretti", artistAvatar: "/icons/artist-dp-2.png", clientName: "Cheyenne Lipshutz", bookingType: "✒️ Tattoo Session", style: "Blackwork", date: "📅 Tue, Aug 20, 2025", time: "⏰ 3:00 PM – 4:00 PM", status: "deposit-requested", statusText: "Deposit Requested" },
    { artistName: "Ethan", artistAvatar: "/icons/artist-dp-3.png", clientName: "Davis", bookingType: "✨ Flash", style: "realism", date: "📅 Wed, Aug 21, 2025", time: "⏰ 2:30 PM – 2:30 PM", status: "deposit-paid", statusText: "Deposit Paid" },
    { artistName: "Sophie Langley", artistAvatar: "/icons/artist-dp-4.png", clientName: "Haylie Bator", bookingType: "✒️ Tattoo Session", style: "Fine Line", date: "📅 Thu, Aug 22, 2025", time: "⏰ 10:00 AM – 11:30 AM", status: "scheduled", statusText: "Scheduled" },
    { artistName: "Clara Jensen", artistAvatar: "/icons/artist-dp-5.png", clientName: "Maren Levin", bookingType: "💬 Consultation", style: "Tribal", date: "📅 Fri, Aug 23, 2025", time: "⏰ 2:00 PM – 5:00 PM", status: "upcoming", statusText: "Upcoming" },
    { artistName: "Noah Reed", artistAvatar: "/icons/artist-dp-6.png", clientName: "Jules Patton", bookingType: "💬 Consultation", style: "Neo Trad", date: "📅 Sat, Aug 24, 2025", time: "⏰ 9:00 AM – 9:30 AM", status: "new", statusText: "New" },
    { artistName: "Aria Stone", artistAvatar: "/icons/artist-dp-7.png", clientName: "Kieran Moss", bookingType: "✨ Flash", style: "Linework", date: "📅 Sat, Aug 24, 2025", time: "⏰ 11:00 AM – 12:00 PM", status: "deposit-requested", statusText: "Deposit Requested" },
    { artistName: "Miles Porter", artistAvatar: "/icons/artist-dp-8.png", clientName: "Val Cruz", bookingType: "✒️ Tattoo Session", style: "Dotwork", date: "📅 Sat, Aug 24, 2025", time: "⏰ 1:00 PM – 3:00 PM", status: "deposit-paid", statusText: "Deposit Paid" },
    { artistName: "Hazel Quinn", artistAvatar: "/icons/artist-dp-9.png", clientName: "Erin Blake", bookingType: "💬 Consultation", style: "Fine Line", date: "📅 Sun, Aug 25, 2025", time: "⏰ 10:00 AM – 10:30 AM", status: "scheduled", statusText: "Scheduled" },
    { artistName: "Jasper Cole", artistAvatar: "/icons/artist-dp-1.png", clientName: "Nolan Fray", bookingType: "✨ Flash", style: "Tribal", date: "📅 Sun, Aug 25, 2025", time: "⏰ 11:00 AM – 11:30 AM", status: "upcoming", statusText: "Upcoming" },
    { artistName: "Ivy Mercer", artistAvatar: "/icons/artist-dp-1.png", clientName: "Rae Dillon", bookingType: "💬 Consultation", style: "Blackwork", date: "📅 Sun, Aug 25, 2025", time: "⏰ 3:00 PM – 3:30 PM", status: "new", statusText: "New" },
    { artistName: "Zane Fowler", artistAvatar: "/icons/artist-dp-2.png", clientName: "Tess Nolan", bookingType: "✒️ Tattoo Session", style: "realism", date: "📅 Mon, Aug 26, 2025", time: "⏰ 9:00 AM – 10:30 AM", status: "deposit-requested", statusText: "Deposit Requested" },
    { artistName: "Elle Chan", artistAvatar: "/icons/artist-dp-3.png", clientName: "Milo Chen", bookingType: "✨ Flash", style: "Fine Line", date: "📅 Mon, Aug 26, 2025", time: "⏰ 11:00 AM – 11:30 AM", status: "deposit-paid", statusText: "Deposit Paid" },
    { artistName: "Rowan Hale", artistAvatar: "/icons/artist-dp-4.png", clientName: "Dana Price", bookingType: "✒️ Tattoo Session", style: "Dotwork", date: "📅 Mon, Aug 26, 2025", time: "⏰ 1:00 PM – 2:00 PM", status: "scheduled", statusText: "Scheduled" },
    { artistName: "Kara Finch", artistAvatar: "/icons/artist-dp-5.png", clientName: "Owen Yates", bookingType: "💬 Consultation", style: "Neo Trad", date: "📅 Mon, Aug 26, 2025", time: "⏰ 4:00 PM – 4:30 PM", status: "upcoming", statusText: "Upcoming" },
    { artistName: "Silas Grey", artistAvatar: "/icons/artist-dp-6.png", clientName: "Pia Long", bookingType: "💬 Consultation", style: "Linework", date: "📅 Tue, Aug 27, 2025", time: "⏰ 9:00 AM – 9:30 AM", status: "new", statusText: "New" },
    { artistName: "Mira Knox", artistAvatar: "/icons/artist-dp-7.png", clientName: "Zoe Shaw", bookingType: "✨ Flash", style: "Tribal", date: "📅 Tue, Aug 27, 2025", time: "⏰ 10:00 AM – 10:30 AM", status: "deposit-requested", statusText: "Deposit Requested" },
    { artistName: "Theo Marsh", artistAvatar: "/icons/artist-dp-8.png", clientName: "Lia Green", bookingType: "✒️ Tattoo Session", style: "Blackwork", date: "📅 Tue, Aug 27, 2025", time: "⏰ 1:00 PM – 3:00 PM", status: "deposit-paid", statusText: "Deposit Paid" },
    { artistName: "Rhea Bram", artistAvatar: "/icons/artist-dp-9.png", clientName: "Eli Ford", bookingType: "💬 Consultation", style: "realism", date: "📅 Tue, Aug 27, 2025", time: "⏰ 4:00 PM – 4:30 PM", status: "scheduled", statusText: "Scheduled" },
    { artistName: "Dane Irwin", artistAvatar: "/icons/artist-dp-2.png", clientName: "Gwen Hart", bookingType: "✨ Flash", style: "Fine Line", date: "📅 Wed, Aug 28, 2025", time: "⏰ 9:00 AM – 9:30 AM", status: "upcoming", statusText: "Upcoming" }
];

export function NewBookingsProvider({ children }: { children: React.ReactNode }) {
    const bookings = useMemo(() => mockBookings, []);
    return (
        <NewBookingsContext.Provider value={{ bookings }}>
            {children}
        </NewBookingsContext.Provider>
    );
}

export function useNewBookings() {
    const ctx = useContext(NewBookingsContext);
    if (!ctx) throw new Error("useNewBookings must be used within NewBookingsProvider");
    return ctx;
}
