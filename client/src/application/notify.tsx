import React, { SyntheticEvent } from 'react';

import create from 'zustand';

type Type = 'INFO' | 'WARN' | 'ERROR';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Notification {
  type: Type;
  message: string;
  duration?: number;
  label?: string;
  wait?: boolean;
  meta?: Record<string, any>;
  handler?: (notification: any) => void;
}

interface Notify {
  notification: Notification | null;
  cache: Notification[];
}

export const store = create<Notify>((set, get) => ({
  notification: null,
  cache: [],
}));

export default {
  info(message: string, config?: Partial<Notification>) {
    toast.info(message);
    this.setNotification({ type: 'INFO', message, ...config });
  },
  warn(message: string, config?: Partial<Notification>) {
    console.warn(message, config);
    toast.warn(message);
    this.setNotification({ type: 'WARN', message, ...config });
  },
  error(message: string, config?: Partial<Notification>) {
    console.error(message, config);
    toast.error(message);
    this.setNotification({ type: 'ERROR', message, ...config });
  },
  setNotification(notification: Notification) {
    const state = store.getState();
    if (!state.notification) store.setState({ notification });
    else store.setState({ cache: [...state.cache, notification] });
  },
  clear() {
    store.setState({ notification: null });
  },
  get notification() {
    return store.getState().notification;
  },
};

export function Notifications() {
  // const { notification } = store();
  // const style = notification;

  return <ToastContainer />;
}
