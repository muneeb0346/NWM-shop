"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

export interface Notification {
    id: string;
    title: string;
    message: string;
    timestamp: Date;
    timeAgo: string;
    read: boolean;
    type?: 'info' | 'success' | 'warning' | 'error';
    link?: string;
}

function formatTimeAgo(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMinutes < 1) return 'Just now';
    if (diffMinutes < 60) return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays === 1) return 'Yesterday';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

interface NotificationsContextType {
    notifications: Notification[];
    unreadCount: number;
    addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
    markAsRead: (id: string) => void;
    markAllAsRead: () => void;
    removeNotification: (id: string) => void;
    clearAll: () => void;
}

const NotificationsContext = createContext<NotificationsContextType | undefined>(undefined);

const getInitialNotifications = (): Notification[] => {
    const now = new Date();
    const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);
    const sept15 = new Date('2024-09-15T10:00:00');

    return [
        {
            id: 'notif-1',
            title: 'New Booking Confirmed',
            message: 'You have a new booking with Sarah M.',
            timestamp: fiveMinutesAgo,
            timeAgo: formatTimeAgo(fiveMinutesAgo),
            read: true,
            type: 'success'
        },
        {
            id: 'notif-2',
            title: 'Deposit Received',
            message: 'John K. has paid the deposit for their session.',
            timestamp: sept15,
            timeAgo: formatTimeAgo(sept15),
            read: false,
            type: 'success'
        },
        {
            id: 'notif-3',
            title: 'Upcoming Appointment Reminder',
            message: 'Reminder: Tattoo session with Alex R. tomorrow at 1:00 PM.',
            timestamp: fiveMinutesAgo,
            timeAgo: formatTimeAgo(fiveMinutesAgo),
            read: false,
            type: 'info'
        },
        {
            id: 'notif-4',
            title: 'Rescheduled Appointment',
            message: 'Maria P. has rescheduled her booking.',
            timestamp: fiveMinutesAgo,
            timeAgo: formatTimeAgo(fiveMinutesAgo),
            read: false,
            type: 'warning'
        },
        {
            id: 'notif-5',
            title: 'Cancellation Notice',
            message: 'Booking with Daniel L. on Sept 14 has been canceled.',
            timestamp: fiveMinutesAgo,
            timeAgo: formatTimeAgo(fiveMinutesAgo),
            read: false,
            type: 'error'
        }
    ];
};

export function NotificationsProvider({ children }: { children: React.ReactNode }) {
    const [notifications, setNotifications] = useState<Notification[]>(() => getInitialNotifications());

    const unreadCount = notifications.filter(n => !n.read).length;

    const addNotification = useCallback((notification: Omit<Notification, 'id' | 'timestamp' | 'read' | 'timeAgo'>) => {
        const timestamp = new Date();
        const newNotification: Notification = {
            ...notification,
            id: `notif-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            timestamp,
            timeAgo: formatTimeAgo(timestamp),
            read: false,
        };
        setNotifications(prev => [newNotification, ...prev]);
    }, []);

    const markAsRead = useCallback((id: string) => {
        setNotifications(prev =>
            prev.map(notif =>
                notif.id === id ? { ...notif, read: true } : notif
            )
        );
    }, []);

    const markAllAsRead = useCallback(() => {
        setNotifications(prev =>
            prev.map(notif => ({ ...notif, read: true }))
        );
    }, []);

    const removeNotification = useCallback((id: string) => {
        setNotifications(prev => prev.filter(notif => notif.id !== id));
    }, []);

    const clearAll = useCallback(() => {
        setNotifications([]);
    }, []);

    return (
        <NotificationsContext.Provider
            value={{
                notifications,
                unreadCount,
                addNotification,
                markAsRead,
                markAllAsRead,
                removeNotification,
                clearAll,
            }}
        >
            {children}
        </NotificationsContext.Provider>
    );
}

export function useNotifications() {
    const context = useContext(NotificationsContext);
    if (context === undefined) {
        throw new Error("useNotifications must be used within a NotificationsProvider");
    }
    return context;
}
