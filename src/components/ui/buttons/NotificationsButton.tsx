"use client";

import styles from './NotificationsButton.module.css';
import BellIcon from '@components/ui/icons/BellIcon';
import { useNotifications } from '@/contexts/NotificationsContext';
import { useState, useEffect, useRef } from 'react';

export default function NotificationsButton() {
    const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotifications();
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const popupRef = useRef<HTMLDivElement>(null);

    const popupId = 'notifications-popup';
    const headingId = 'notifications-heading';

    // Handle click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Handle ESC key
    useEffect(() => {
        function handleEscKey(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscKey);
        }

        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isOpen]);

    const togglePopup = () => {
        setIsOpen(prev => !prev);
    };

    const handleNotificationClick = (id: string) => {
        markAsRead(id);
        setIsOpen(false);
    };

    // Manage focus when opening/closing
    useEffect(() => {
        if (isOpen) {
            // Try to focus first notification item, else header button, else popup
            const firstItem = wrapperRef.current?.querySelector(`li.${styles['notification-item']}`) as HTMLElement | null;
            const markAllBtn = wrapperRef.current?.querySelector(`button.${styles['mark-all-button']}`) as HTMLElement | null;
            (firstItem ?? markAllBtn ?? popupRef.current)?.focus();
        }
    }, [isOpen]);

    return (
        <div className={styles.wrapper} ref={wrapperRef}>
            <button
                ref={buttonRef}
                className={styles.button}
                onClick={togglePopup}
                aria-label="Notifications"
                aria-haspopup="dialog"
                aria-expanded={isOpen}
                aria-controls={popupId}
            >
                <BellIcon />
                {unreadCount > 0 && (
                    <span className={`${styles['unread-dot']} ${styles['on-bell']}`} />
                )}
            </button>
            {isOpen && (
                <div
                    id={popupId}
                    className={styles.popup}
                    role="dialog"
                    aria-labelledby={headingId}
                    aria-modal={false}
                    ref={popupRef}
                    tabIndex={-1}
                >
                <div className={styles.header}>
                    <h5 id={headingId} className='head-16-700-131'>Notifications</h5>
                    <button
                        className={`text-14-500-136 ${styles['mark-all-button']}`}
                        onClick={markAllAsRead}
                    >
                        Mark All as Read
                    </button>
                </div>
                <ul className={styles['notifications-list']}>
                    {notifications.length === 0 && (
                        <li className={`text-14-500-136 ${styles.empty}`}>No notifications</li>
                    )}
                    {notifications.map((n) => (
                        <li
                            key={n.id}
                            className={styles['notification-item']}
                            onClick={() => handleNotificationClick(n.id)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    handleNotificationClick(n.id);
                                }
                            }}
                        >
                            <div className={styles.content}>
                                <div className={styles['title-row']}>
                                    <h6 className='text-14-500-136'>{n.title}</h6>
                                    {!n.read && <div className={styles['unread-dot']} />}
                                </div>
                                <p className={`text-12-400-133 ${styles.message}`}>{n.message}</p>
                            </div>
                            <span className={`text-10-400-120 ${styles.timeago}`}>{n.timeAgo}</span>
                        </li>
                    ))}
                </ul>
            </div>
            )}
        </div>
    );
}