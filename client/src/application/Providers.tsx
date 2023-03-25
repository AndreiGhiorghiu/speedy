import React from 'react';
import Loader from '$components/Loader';
import {Provider as SlotProvider} from '$components/Slot';
import BrowserRouter from '$application/BrowserRouter';

import {Notifications} from '$application/notify';
import {ReactQueryProvider} from '$application/reactQuery';

export default function Providers(props: {children: React.ReactNode}) {
    return (
        <BrowserRouter>
            <React.Suspense fallback={<Loader />}>
                <Notifications />
                <ReactQueryProvider>
                    <SlotProvider>{props.children}</SlotProvider>
                </ReactQueryProvider>
            </React.Suspense>
        </BrowserRouter>
    );
}
