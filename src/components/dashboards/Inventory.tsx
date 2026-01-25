"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Inventory.module.css";
import TableStyles from "@styles/TableStyles.module.css";
import DashboardStyles from "@styles/DashboardStyles.module.css";
import ArrowRedirectButton from "@components/ui/buttons/ArrowRedirectButton";
import Dropdown from "@components/ui/dropdowns/Dropdown";
import Image from "next/image";
import { useInventory } from "@contexts/InventoryContext";
import InventoryStatusBadge from "@components/ui/tags/InventoryStatusBadge";

export default function Inventory() {
    const { items } = useInventory();
    const [filterValue, setFilterValue] = useState("All Status");

    const filteredItems = useMemo(() => {
        if (filterValue === "All Status") return items;
        const map: Record<string, "good" | "low" | "out" | "okay"> = {
            "Good": "good",
            "Low": "low",
            "Out": "out",
            "Okay": "okay",
        };
        const status = map[filterValue];
        return items.filter((i) => i.status === status);
    }, [items, filterValue]);

    return (
        <div className={`${DashboardStyles.card}`}>
            <div className={DashboardStyles["card-header"]}>
                <h3 className="head-20-600-130">Inventory</h3>
                <div className={styles.controls}>
                    <Dropdown
                        options={["All Status", "Good", "Low", "Out", "Okay"]}
                        value={filterValue}
                        onChange={setFilterValue}
                    />
                    <ArrowRedirectButton href="/inventory" />
                </div>
            </div>

            <div className={TableStyles.table}>
                <div className={TableStyles["table-content-wrapper"]}>
                    <div className={TableStyles["table-header-row"]}>
                        <div className={`${TableStyles.cell} ${styles.artist}`}><span className="text-14-600-130">Artist Name</span></div>
                        <div className={`${TableStyles.cell} ${styles.item}`}><span className="text-14-600-130">Item</span></div>
                        <div className={`${TableStyles.cell} ${styles.quantity}`}><span className="text-14-600-130">Quantity</span></div>
                        <div className={`${TableStyles.cell} ${styles.threshold}`}><span className="text-14-600-130">Threshold</span></div>
                        <div className={`${TableStyles.cell} ${styles.vendor}`}><span className="text-14-600-130">Vendor</span></div>
                        <div className={`${TableStyles.cell} ${styles["last-used"]}`}><span className="text-14-600-130">Last Used</span></div>
                        <div className={`${TableStyles.cell} ${styles.status}`}><span className="text-14-600-130">Status</span></div>
                    </div>
                    <div className={TableStyles.body}>
                        <AnimatePresence mode="popLayout">
                            {filteredItems.map((it) => (
                                <motion.div
                                    key={it.id}
                                    className={TableStyles["table-row"]}
                                    layout
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{
                                        layout: { duration: 0.3, ease: "easeOut" },
                                        opacity: { duration: 0.3, ease: "easeOut" },
                                        height: { duration: 0.3, ease: "easeOut" },
                                    }}
                                >
                                    <div className={`${TableStyles.cell} ${styles.artist}`}>
                                        <Image src={it.avatar} alt={it.artistName} width={24} height={24} className={TableStyles.avatar} />
                                        <span className="text-12-500-140">{it.artistName}</span>
                                    </div>
                                    <div className={`${TableStyles.cell} ${styles.item}`}>
                                        <span className="text-12-500-140">{it.item}</span>
                                    </div>
                                    <div className={`${TableStyles.cell} ${styles.quantity}`}>
                                        <span className="text-12-400-140">{String(it.quantity)}</span>
                                    </div>
                                    <div className={`${TableStyles.cell} ${styles.threshold}`}>
                                        <span className="text-12-400-140">{String(it.threshold)}</span>
                                    </div>
                                    <div className={`${TableStyles.cell} ${styles.vendor}`}>
                                        <span className="text-12-400-140">{it.vendor}</span>
                                    </div>
                                    <div className={`${TableStyles.cell} ${styles["last-used"]}`}>
                                        <span className="text-12-400-140">{it.lastUsed}</span>
                                    </div>
                                    <div className={`${TableStyles.cell} ${styles.status}`}>
                                        <InventoryStatusBadge
                                            variant={it.status}
                                            text={
                                                it.status === "low" ? "⚠️ Low" :
                                                    it.status === "good" ? "Good" :
                                                        it.status === "out" ? "⛔ Out" :
                                                            "Okay"
                                            }
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
