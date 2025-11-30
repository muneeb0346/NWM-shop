"use client";
import React, { createContext, useContext, useMemo } from "react";

export interface InventoryItem {
    id: string;
    artistName: string;
    avatar: string;
    item: string;
    quantity: number | string;
    threshold: number | string;
    vendor: string;
    lastUsed: string;
    status: "low" | "okay" | "out" | "good";
}

interface InventoryContextValue {
    items: InventoryItem[];
}

const InventoryContext = createContext<InventoryContextValue | undefined>(undefined);

const mockItems: InventoryItem[] = [
    { id: "i1", artistName: "Ayra Voss", avatar: "/icons/artist-dp-1.png", item: "Dynamic Black 8oz Ink", quantity: 12, threshold: 10, vendor: "Ink Supply Co", lastUsed: "2025-09-09", status: "low" },
    { id: "i2", artistName: "Sophie Langley", avatar: "/icons/artist-dp-2.png", item: "7RL Needles (Box of 50)", quantity: 200, threshold: 20, vendor: "Ink Supply Co", lastUsed: "2025-09-09", status: "okay" },
    { id: "i3", artistName: "Ayra Voss", avatar: "/icons/artist-dp-1.png", item: "Green Soap (1L)", quantity: 14, threshold: 5, vendor: "CleanTattoo", lastUsed: "2025-04-06", status: "out" },
    { id: "i4", artistName: "Ayra Voss", avatar: "/icons/artist-dp-1.png", item: "Stencil Transfer Paper (Sheets)", quantity: 1002, threshold: 100, vendor: "Stencil Champs", lastUsed: "2025-04-06", status: "good" },
    { id: "i5", artistName: "Ayra Voss", avatar: "/icons/artist-dp-1.png", item: "Nitrile Gloves (Box of 100)", quantity: 40, threshold: 10, vendor: "SafeHands", lastUsed: "2025-02-11", status: "good" },
    { id: "i6", artistName: "Ayra Voss", avatar: "/icons/artist-dp-1.png", item: "Eternal White Ink 2oz", quantity: 32, threshold: 10, vendor: "Ink Supply Co", lastUsed: "2025-02-11", status: "good" },
    { id: "i7", artistName: "Luca Moretti", avatar: "/icons/artist-dp-3.png", item: "Cavicide Disinfectant (1L)", quantity: 120034, threshold: 100, vendor: "28 Years", lastUsed: "2025-02-11", status: "good" },
    { id: "i8", artistName: "Ethan", avatar: "/icons/artist-dp-4.png", item: "Cavicide Disinfectant (1L)", quantity: 120034, threshold: 100, vendor: "28 Years", lastUsed: "2025-02-11", status: "good" },
    { id: "i9", artistName: "Clara Jensen", avatar: "/icons/artist-dp-9.png", item: "Cavicide Disinfectant (1L)", quantity: 120034, threshold: 100, vendor: "28 Years", lastUsed: "2025-02-11", status: "out" },
    { id: "i10", artistName: "Ethan Jensen", avatar: "/icons/artist-dp-6.png", item: "Cavicide Disinfectant (1L)", quantity: 1234, threshold: 10, vendor: "8 Years", lastUsed: "2024-02-11", status: "okay" },
];

export function InventoryProvider({ children }: { children: React.ReactNode }) {
    const items = useMemo(() => mockItems, []);
    return <InventoryContext.Provider value={{ items }}>{children}</InventoryContext.Provider>;
}

export function useInventory() {
    const ctx = useContext(InventoryContext);
    if (!ctx) throw new Error("useInventory must be used within InventoryProvider");
    return ctx;
}
