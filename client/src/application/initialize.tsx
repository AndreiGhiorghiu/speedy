import React from 'react';
import {AuthSession, State} from '$types';
import ReactDOM from 'react-dom/client';
import Application from '$application/Application';
import {Event, on} from '$application/events';
import reactQuery from '$application/reactQuery';
import localStorage from '$application/localStorage';

on(Event.ERROR, (error) => {
    console.error(error);
});

on(Event.LOGIN, (user?: AuthSession) => {});

on(Event.LOGOUT, () => {
    reactQuery.clear();

    localStorage.clear();
});

on(Event.USER, async (user) => {
    console.log('user');
});

on(Event.INITIALIZED, async () => {});

export default async function initialize() {
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Application />);
}
