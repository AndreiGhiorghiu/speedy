import React, {createElement} from 'react';
import type {PrivateRoutePath} from './routes';
import {State} from '$types';
import {UserMe} from '$types/api';
import {entries, keys} from 'lodash';
import {Routes, Route, Navigate} from 'react-router-dom';
import NoRoutePermission from '$components/NoRoutePermission';
import Loader from '$components/Loader';
import Panel from '$components/Panel';

import store from '$application/store';
import {publicRoutes, privateRoutes} from './routes';
import {publicDefault, privateDefault} from './routes';

function hasPermission(user: UserMe, permission: any) {
    if (!permission || !permission.length) return true;

    if (user?.role?.includes?.('admin')) return true;
    return permission.includes(user?.role?.[0]);
}

function guard(user: UserMe, path: PrivateRoutePath) {
    const permission = 'auth';
    const {component, guard} = privateRoutes[path];

    if (hasPermission(user, guard)) {
        return createElement(component);
    }

    return <NoRoutePermission user={user} permission={permission as string} redirect="/" />;
}

function PrivateRoutes() {
    const user = store.value('user');

    if (!user) return <Loader />;

    return (
        <Panel>
            <Routes>
                {keys(privateRoutes).map((path) => {
                    return (
                        <Route
                            path={path}
                            element={guard(user, path as PrivateRoutePath)}
                            key={path}
                        />
                    );
                })}
                <Route path="/*" element={<Navigate replace to={privateDefault} />} />
            </Routes>
        </Panel>
    );
}

function PublicRoutes() {
    return (
        <Routes>
            {entries(publicRoutes).map(([path, {component: Component}]) => {
                return <Route path={path} element={<Component />} key={path} />;
            })}
            <Route path="/*" element={<Navigate replace to={publicDefault} />} />
        </Routes>
    );
}

export default function Router() {
    return store.is('state', State.PUBLIC) ? <PublicRoutes /> : <PrivateRoutes />;
}
